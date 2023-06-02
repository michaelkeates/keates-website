import fs from 'fs';
import path from 'path';
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

  // Create a temporary file path
  const filePath = path.join('/tmp', 'cv.pdf');

  // Write the PDF buffer to the temporary file
  fs.writeFileSync(filePath, pdfBuffer);

  // Set response headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
  res.setHeader('Content-Length', fs.statSync(filePath).size);

  // Stream the file to the client for download
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);

  // Remove the temporary file after streaming
  fileStream.on('end', () => {
    fs.unlinkSync(filePath);
  });
}
