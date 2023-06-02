import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the page content to your Next.js CV page URL
  await page.goto('http://www.michaelkeates.co.uk/about'); // Replace with the actual URL of your CV page

  // Modify font color for the Paragraph component
  await page.addStyleTag({
    content: `
      .chakra-ui-paragraph {
        color: #000000 !important;
      }
    `,
  });

  // Generate PDF with modified print settings
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();

  // Set response headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
  res.setHeader('Content-Length', pdfBuffer.length);

  // Send the PDF buffer as the response
  res.send(pdfBuffer);
}
