import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the page content to your Next.js CV page URL
  await page.goto('http://www.michaelkeates.co.uk/about'); // Replace with the actual URL of your CV page

  // Generate PDF as a buffer
  const pdfBuffer = await page.pdf({ format: 'A4' });

  await browser.close();

  // Set response headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');

  // Send the PDF buffer as the response
  res.send(pdfBuffer);
}
