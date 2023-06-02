import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

async function generatePDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const url = 'http://www.michaelkeates.co.uk/about' // Replace with the URL of the about page

  await page.goto(url)

  // Or, add a delay before generating the PDF (in milliseconds)
  await page.waitForTimeout(2000) // Adjust the delay as needed

  // Evaluate the page and remove unwanted elements
  await page.evaluate(() => {
    // Replace the selector with the appropriate one for the Chakra Grid
    const gridElement = document.querySelector('.css-85h89v, .css-481av6')
    const gridElement2 = document.querySelectorAll('.css-1id2kv5')
    const gridElement3 = document.querySelector('.css-vqf3rg')

    if (gridElement) {
      // Modify the grid template columns property to have 4 columns
      gridElement.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
    }

    gridElement2.forEach((gridElement2) => {
      // Modify the grid template columns property to have 7 columns
      gridElement2.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
    });

    if (gridElement3) {
      // Modify the grid template columns property to have 4 columns
      gridElement3.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
    }

    // Replace the selector with the appropriate one for the elements you want to remove
    const unwantedElements = document.querySelectorAll(
      '.model.css-14imgav, .css-fx26l1, .css-nkmf85, .css-owexls'
    )

    unwantedElements.forEach(element => {
      element.remove()
    })
  })

  // Generate PDF with modified print settings
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true
  })

  await browser.close()

  // Save the PDF to the public folder
  const publicPath = path.join(process.cwd(), 'public')
  const filePath = path.join(publicPath, 'cv.pdf')
  fs.writeFileSync(filePath, pdfBuffer)
}

generatePDF().catch(error => {
  console.error('Error generating PDF:', error)
  process.exit(1)
})
