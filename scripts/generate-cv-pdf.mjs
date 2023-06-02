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
    document.body.style.backgroundColor = '#ffffff' // Set the background color to white (#ffffff)
    // Replace the selector with the appropriate one for the Chakra Grid
    const gridElement = document.querySelectorAll('.css-85h89v, .css-481av6')
    const gridElement2 = document.querySelectorAll('.css-1id2kv5')
    const gridElement3 = document.querySelector('.css-vqf3rg')
    const textSize = document.querySelectorAll('.css-1oo097b')
    const textSize2 = document.querySelectorAll('.css-14rgeuu')
    const textSize3 = document.querySelectorAll('.chakra-text.css-5m355k')
    const textSize4 = document.querySelectorAll('.chakra-text.css-9c7r58')
    const textColors = document.querySelectorAll(
      '.css-1oo097b, .chakra-heading.css-kowkqe, .chakra-heading.css-17wi6zd, .css-14rgeuu, .chakra-text.css-5m355k, .chakra-heading.css-kx7ixn, .css-1jzpmk, .chakra-text.css-9c7r58, .chakra-heading.css-17cjct2, .chakra-heading.css-9n0xbk, .chakra-heading.css-17cjct2'
    )
    const imageSize = document.querySelectorAll('.grid-item-thumbnail')
    // Replace the selector with the appropriate one for the grid block
    const gridBlock = document.querySelector('.css-gzapkn')

    const customGridElements = document.querySelectorAll('.css-9t4bud, .chakra-heading.css-kowkqe')

    gridElement.forEach(gridElement => {
      // Modify the grid template columns property to have 7 columns
      gridElement.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))'
    })

    gridElement2.forEach(gridElement2 => {
      // Modify the grid template columns property to have 7 columns
      gridElement2.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))'
    })

    if (gridElement3) {
      // Modify the grid template columns property to have 4 columns
      gridElement3.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))'
    }

    textSize.forEach(textSize => {
      textSize.style.fontSize = '12px' // Replace '12px' with your desired font size
    })

    textSize2.forEach(textSize2 => {
      textSize2.style.fontSize = '9px' // Replace '12px' with your desired font size
    })

    textSize3.forEach(textSize3 => {
      textSize3.style.fontSize = '8px' // Replace '12px' with your desired font size
    })

    textSize4.forEach(textSize4 => {
      textSize4.style.fontSize = '6px' // Replace '12px' with your desired font size
    })

    textColors.forEach(textColor => {
      textColor.style.color = '#000000' // Replace '#000000' with your desired font color
    })

    imageSize.forEach(imageSize => {
      imageSize.style.width = '100px' // Replace '100px' with your desired image width
      imageSize.style.height = '100px' // Replace '100px' with your desired image height
      //center image
      imageSize.style.marginLeft = 'auto'
      imageSize.style.marginRight = 'auto'
    })

    // Replace the selector with the appropriate one for the elements to remove from the pdf
    const unwantedElements = document.querySelectorAll(
      '.model.css-14imgav, .css-fx26l1, .css-nkmf85, .css-owexls, .chakra-button.css-r7xd4a, .css-ctnmuq, .css-13hhjt6, .custom-grid'
    )

    customGridElements.forEach(element => {
      // Add custom styles to remove padding/margin below each element
      element.style.marginBottom = '0' // Set margin-bottom to 0
      element.style.paddingBottom = '0' // Set padding-bottom to 0
    })

    unwantedElements.forEach(element => {
      element.remove()
    })

    //if (gridBlock) {
    // Apply a page break before the grid block
    //  gridBlock.style.pageBreakBefore = 'always'
    // Adjust the margin-top property to move the block further down
    //  gridBlock.style.marginTop = '100px' // Adjust the value as needed
    //}
  })

  // Generate PDF with modified print settings
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    quality: 100,
    dpi: 600 // Adjust the DPI value as needed
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
