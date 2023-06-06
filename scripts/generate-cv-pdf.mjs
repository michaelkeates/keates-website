import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

async function generatePDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

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
    const textSize2 = document.querySelectorAll('.css-14rgeuu, .css-9zshpp, .emoji_emailLink__rvK9O')
    const textSize3 = document.querySelectorAll('.chakra-text.css-5m355k')
    const textSize4 = document.querySelectorAll('.chakra-text.css-9c7r58')
    const textSize5 = document.querySelectorAll('.chakra-heading.css-17cjct2, .chakra-heading.css-9n0xbk, .chakra-heading.css-kx7ixn, .emoji_emoji__vYFMy, .chakra-heading.css-17wi6zd')
    const textColors = document.querySelectorAll(
      '.css-1oo097b, .chakra-heading.css-kowkqe, .chakra-heading.css-17wi6zd, .css-14rgeuu, .chakra-text.css-5m355k, .chakra-heading.css-kx7ixn, .css-1jzpmk, .chakra-text.css-9c7r58, .chakra-heading.css-9n0xbk, .chakra-heading.css-17cjct2, .emoji_emailLink__rvK9O, .css-9zshpp, .chakra-divider.css-svjswr'
    )
    const borderColor = document.querySelectorAll('.css-svjswr')
    const imageSize = document.querySelectorAll('.grid-item-thumbnail')
    // Replace the selector with the appropriate one for the grid block
    const gridBlock = document.querySelector('.css-gzapkn')

    const customGridElements = document.querySelectorAll('.css-9t4bud, .css-o75elv, .css-1id2kv5, .css-gzapkn, .css-1oo097b, .css-13hhjt6, .css-1a0pxu, .css-1a0pxu')
    const customGridElements2 = document.querySelectorAll('.chakra-heading.css-kowkqe')
    const customGridElements3 = document.querySelectorAll('.css-1k7klv9, .css-1oo097b, .css-13hhjt6')

    gridElement.forEach(gridElement => {
      // Modify the grid template columns property to have 7 columns
      gridElement.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))'
    })

    gridElement2.forEach(gridElement2 => {
      // Modify the grid template columns property to have 7 columns
      gridElement2.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))'
      gridElement2.style.width = '70%' // Replace '100px' with your desired image width
      gridElement2.style.height = '70%' // Replace '100px' with your desired image height
    })

    if (gridElement3) {
      // Modify the grid template columns property to have 4 columns
      gridElement3.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))'
    }

    textSize.forEach(textSize => {
      textSize.style.fontSize = '10px'
    })

    textSize2.forEach(textSize2 => {
      textSize2.style.fontSize = '9px'
    })

    textSize3.forEach(textSize3 => {
      textSize3.style.fontSize = '8px'
    })

    textSize4.forEach(textSize4 => {
      textSize4.style.fontSize = '6px'
    })

    textSize5.forEach(textSize5 => {
      textSize5.style.fontSize = '16px'
    })

    textColors.forEach(textColor => {
      textColor.style.color = '#000000'
    })

    borderColor.forEach(borderColor => {
      borderColor.style.borderColor = 'rgba(0, 0, 0, 0.1)'
    })

    imageSize.forEach(imageSize => {
      imageSize.style.width = '60px'
      imageSize.style.height = '60px'
      //center image
      imageSize.style.marginLeft = 'auto'
      imageSize.style.marginRight = 'auto'
    })

    const unwantedElements = document.querySelectorAll(
      '.model.css-14imgav, .css-fx26l1, .css-nkmf85, .css-owexls, .chakra-button.css-r7xd4a, .custom-grid, .chakra-heading.css-17wi6zd, .css-3isgxm'
    )

    customGridElements.forEach(element => {
      element.style.marginBottom = '0'
      element.style.paddingBottom = '-10px'
    })

    customGridElements2.forEach(element => {
      element.style.marginBottom = '-12px'
    })

    customGridElements3.forEach(element => {
      element.style.marginBottom = '2px'
      element.style.paddingBottom = '2px'

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
