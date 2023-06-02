import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the page content to your Next.js CV page URL
  await page.goto('http://localhost:3000/about'); // Replace with the actual URL of your CV page

  // Replace images with text
  await page.$$eval('img', (images) => {
    images.forEach((image) => {
      const textNode = document.createTextNode('Image Placeholder'); // Replace with the desired text
      image.parentNode.replaceChild(textNode, image);
    });
  });

  // Generate PDF as a buffer
  const pdfBuffer = await page.pdf({ format: 'A4' });

  await browser.close();

  // Set response headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');

  // Send the PDF buffer as the response
  res.send(pdfBuffer);
}
