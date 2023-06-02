import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the HTML content for the PDF
  const htmlContent = `
    <html>
      <body>
        <h1>Hello, World!</h1>
        <p>This is a sample PDF generated from custom content.</p>
      </body>
    </html>
  `;

  // Set the page content to the custom HTML
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Generate PDF with modified print settings
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();

  // Set response headers for file download
  //res.setHeader('Content-Type', 'application/pdf');
  //res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
  //res.setHeader('Content-Length', pdfBuffer.length);

  // Stream the PDF buffer to the client for download
  res.send(pdfBuffer);
}
