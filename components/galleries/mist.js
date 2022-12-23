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
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.03.09.png',
    title: 'Some image 1',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.03.18.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.03.51.png',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.04.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.12.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.22.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.29.png',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.39.png',
    caption: 'Testing 1 2 4 5',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.48.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.04.55.png',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.05.19.png',
    caption: 'Testing 1 2 4 5',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.05.29.png',
    caption: 'Down!',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.05.42.png',
    title: 'Some image 1',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.06.01.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.06.20.png',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.06.32.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.06.48.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.07.00.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.07.11.png',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.07.20.png',
    caption: 'Testing 1 2 4 5',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.07.30.png',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.07.42.png',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.07.52.png',
    caption: 'Testing 1 2 4 5',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/Screenshot-2022-08-02-at-15.05.29.png',
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
