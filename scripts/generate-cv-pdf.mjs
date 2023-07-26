import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: 'new',
    // `headless: true` (default) enables old Headless;
    // `headless: 'new'` enables new Headless;
    // `headless: false` enables “headful” mode.
  });
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

  const url = 'http://www.michaelkeates.co.uk/about' // Replace with the URL of the about page

  await page.goto(url)

  //or, add a delay before generating the PDF (in milliseconds)
  await page.waitForTimeout(2000) // Adjust the delay as needed

  //evaluate the page and remove unwanted elements
  await page.evaluate(() => {
    document.body.style.backgroundColor = '#ffffff'
    const gridElement = document.querySelectorAll('.css-85h89v, .css-481av6')
    const gridElement2 = document.querySelectorAll('.css-1id2kv5')
    const gridElement3 = document.querySelector('.css-vqf3rg')
    const textSize = document.querySelectorAll(
      '.css-1oo097b, .chakra-heading.css-1vukcke, .chakra-badge.css-g6xq4p, .chakra-heading.css-1dilgbf'
    )
    const textSize2 = document.querySelectorAll(
      '.css-14rgeuu, .css-9zshpp, .emoji_emailLink__rvK9O, .css-1dsdcac'
    )
    const textSize3 = document.querySelectorAll('.chakra-text.css-5m355k')
    const textSize4 = document.querySelectorAll('.chakra-text.css-9c7r58, .chakra-text.css-1bgxado')
    const textSize5 = document.querySelectorAll(
      '.chakra-heading.css-17cjct2, .chakra-heading.css-9n0xbk, .chakra-heading.css-kx7ixn, .emoji_emoji__vYFMy, .chakra-heading.css-17wi6zd'
    )
    const textSize6 = document.querySelectorAll(
      '.chakra-text.css-p23alj'
    )
    const textColors = document.querySelectorAll(
      '.css-1oo097b, .chakra-heading.css-kowkqe, .chakra-heading.css-17wi6zd, .css-14rgeuu, .chakra-text.css-5m355k, .chakra-heading.css-kx7ixn, .css-1jzpmk, .chakra-text.css-9c7r58, .chakra-heading.css-9n0xbk, .chakra-heading.css-17cjct2, .emoji_emailLink__rvK9O, .css-9zshpp, .chakra-divider.css-svjswr, .chakra-heading.css-1vukcke, .chakra-badge.css-1ajj9qg, .css-1dsdcac, .chakra-heading.css-1dilgbf'
    )
    const borderColor = document.querySelectorAll(
      '.css-svjswr, .chakra-divider.css-mzlxjy'
    )
    const imageSize = document.querySelectorAll('.grid-item-thumbnail')

    const customGridElements = document.querySelectorAll(
      '.css-9t4bud, .css-o75elv, .css-1id2kv5, .css-gzapkn, .css-1oo097b, .css-13hhjt6, .css-1a0pxu, .css-1a0pxu'
    )
    const customGridElements2 = document.querySelectorAll(
      '.chakra-heading.css-kowkqe, .css-98n5v3, .chakra-heading.css-9n0xbk'
    )
    const customGridElements3 = document.querySelectorAll(
      '.css-1k7klv9, .css-1oo097b, .css-13hhjt6'
    )

    const boxElements = document.querySelectorAll(
      '.css-1jzpmk, .css-o75elv, .css-1a0pxu, .css-n1k3mh'
    )

    //remove background and shadow
    const boxElement = document.querySelectorAll(
      '.css-fzwid6, .css-1a0pxu, .css-98n5v3, .css-19iosgf, .css-qt4sqs, .css-siq2cg, .css-o7muvo'
    )

    const badgeElement = document.querySelector('.chakra-badge.css-1ajj9qg')

    //remove anything with img tag
    const linkBoxElements = document.querySelectorAll(
      '.chakra-linkbox.css-16kwgao, .css-19v23ry'
    )

    const fontweight = document.querySelectorAll('.chakra-heading.css-1dilgbf')

    const padding = document.querySelectorAll('.css-o7muvo')

    //next section

    gridElement.forEach(gridElement => {
      //modify the grid template columns property to have 7 columns
      gridElement.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))'
    })

    gridElement2.forEach(gridElement2 => {
      //modify the grid template columns property to have 7 columns
      gridElement2.style.gridTemplateColumns = 'repeat(9, minmax(0, 1fr))'
      //gridElement2.style.width = '70%' // Replace '100px' with your desired image width
      //gridElement2.style.height = '70%' // Replace '100px' with your desired image height
    })

    if (gridElement3) {
      //modify the grid template columns property to have 4 columns
      gridElement3.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))'
    }

    textSize.forEach(textSize => {
      textSize.style.fontSize = '10px'
    })

    textSize2.forEach(textSize2 => {
      textSize2.style.fontSize = '9px'
    })

    textSize3.forEach(textSize3 => {
      textSize3.style.fontSize = '10px'
    })

    textSize4.forEach(textSize4 => {
      textSize4.style.fontSize = '7px'
    })

    textSize5.forEach(textSize5 => {
      textSize5.style.fontSize = '16px'
    })

    textSize6.forEach(textSize5 => {
      textSize5.style.fontSize = '12px'
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
      '.model.css-14imgav, .css-fx26l1, .css-nkmf85, .css-owexls, .chakra-button.css-r7xd4a, .custom-grid, .chakra-heading.css-17wi6zd, .css-3isgxm, .css-kjxakp'
    )

    customGridElements.forEach(element => {
      element.style.marginBottom = '0'
      element.style.paddingBottom = '-10px'
      element.style.background = 'transparent'
      element.style.boxShadow = 'none'
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

    boxElements.forEach(boxElement => {
      const title = boxElement.getAttribute('title')

      if (title) {
        boxElement.textContent = title
        boxElement.style.fontSize = '10px'
        boxElement.style.background = 'transparent'
        boxElement.style.boxShadow = 'none'
        boxElement.style.width = '100%'
        boxElement.style.padding = '0'
      }
    })

    boxElement.forEach(element => {
      element.style.background = 'transparent'
      element.style.boxShadow = 'none'
    })

    if (badgeElement) {
      //remove the background by setting the CSS variable '--badge-bg' to 'transparent'
      badgeElement.style.setProperty('--badge-bg', 'transparent')
    }

    linkBoxElements.forEach(linkBoxElement => {
      // Remove the <img> element inside the link box
      const imgElement = linkBoxElement.querySelector('img')
      if (imgElement) {
        imgElement.remove()
      }

      // Apply a negative margin to move the element up
      linkBoxElement.style.marginTop = '-25px' // Adjust the value as needed
    })

    fontweight.forEach(fontweight => {
      fontweight.style.fontWeight = '400'
    })

    padding.forEach(element => {
      element.style.padding = '0' //remove the padding
    })
  })

  // Generate PDF with modified print settings
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    quality: 100
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
