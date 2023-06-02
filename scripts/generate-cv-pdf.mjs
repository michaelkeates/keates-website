import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

async function generatePDF() {
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

  // Save the PDF to the public folder
  const publicPath = path.join(process.cwd(), 'public');
  const filePath = path.join(publicPath, 'cv.pdf');
  fs.writeFileSync(filePath, pdfBuffer);
}

generatePDF().catch((error) => {
  console.error('Error generating PDF:', error);
  process.exit(1);
});
