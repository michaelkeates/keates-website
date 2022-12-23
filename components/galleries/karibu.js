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
  useColorModeValue
} from '@chakra-ui/react'

export const photos = [
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture1.jpg',
    title: 'Some image 1',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture5.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture11.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture21.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture25.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture43.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture52.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture56.jpg',
    caption: 'Testing 1 2 4 5',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture67.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture68.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/capture69.jpg',
    caption: 'Testing 1 2 4 5',
    width: '60px',
    height: 3
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
      <div className="carousel">
        <SimpleGrid>
          {images.map(image => (
            <div>
              <img
                src={image.src}
                alt="logo"
                onClick={e => this.handleClickImage(e, image)}
                style={{
                  width: '100%',
                  marginBottom: '1rem',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              />
            </div>
          ))}
        </SimpleGrid>

        {current && (
          <Lightbox
            mainSrc={current.src}
            imageTitle={current.title}
            imageCaption={current.caption}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={this.handleCloseModal}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default ImageViewer
