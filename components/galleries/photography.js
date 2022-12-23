import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
  Box,
  Divider,
  useColorModeValue,
  flexbox
} from '@chakra-ui/react'

export const photos = [
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/DSC_0065-Enhanced-copy.jpg',
    title: 'Lake Geneva',
    caption: 'Lake Geneva, Switzerland🇨🇭 2014'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/Photo-04-10-2018-02-11-44-Enhanced-copy.jpg',
    title: 'Walk way',
    caption: 'Newport, Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 2018'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/Photo-04-10-2018-08-21-34-Enhanced-copy.jpg',
    title: 'Quiet road',
    caption:
      'Quiet road walking through the countryside of Llantrisant, Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 2018'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/photo-05-10-2018-11-37-59-copy-2.jpg',
    title: 'Simone',
    caption:
      'Turn over a new leaf 🍁. Thank you to @Simone for having a lot of patience and putting up having a camera shoved into her face! 😂 No wonder she’s hiding. Llantrisant, Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 2018'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/D1M2225-Enhanced-copy.jpg',
    title: 'Elephants',
    caption:
      'Family of elephants walking. Tsavo East National Park, Kenya 🇰🇪  2017'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/D1M_6877-Enhanced-copy.jpg',
    title: 'Flower and the bee',
    caption: 'Goring & Streatley, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 2022'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/DSC_0079-2-Enhanced-copy.jpg',
    title: 'Scooter',
    caption: 'Bar Harbor, USA 🇺🇸 2014'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/07/D1M2722-Enhanced-copy.jpg',
    title: 'Tusker',
    caption:
      'This majestic elephant decided to hang about and pose for the camera! Tsavo East National Park, Kenya 🇰🇪  2017'
  }
]

class ImageViewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: photos,
      photoIndex: 0,
      current: ''
    }
  }

  handleClickImage = (e, image) => {
    e && e.preventDefault()

    this.setState({
      current: image
    })
  }

  handleCloseModal = e => {
    e && e.preventDefault()

    this.setState({
      current: ''
    })
  }

  render() {
    const { images, photoIndex, current } = this.state

    return (
      <SimpleGrid columns={[2, 2, 4]} gap={1}>
        {images.map(image => (
          <img
            src={image.src}
            alt="logo"
            onClick={e => this.handleClickImage(e, image)}
          />
        ))}

        {current && (
            <Lightbox
              mainSrc={current.src}
              imageTitle={current.title}
              imageCaption={current.caption}
              onCloseRequest={this.handleCloseModal}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
        )}
      </SimpleGrid>
    )
  }
}

export default ImageViewer
