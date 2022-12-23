import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import { SimpleGrid } from '@chakra-ui/react'

export const photos = [
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.40.01.jpg',
    title: 'Some image 1',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.40.21.jpg',
    title: 'Some image 2',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.40.45.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.40.57.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.41.11.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.41.21.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.41.34.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.41.49.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.42.09.jpg',
    caption: 'down',
    width: '60px',
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.42.19jpg',
    title: 'Some image 1',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.42.33.jpg',
    title: 'Some image 2',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.42.55.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.43.22.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.43.35jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.45.24.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.46.26.jpg',
    caption: 'Testing 1 2 4 5',
    width: 4,
    height: 3
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.46.44.jpg',
    caption: 'Testing 1 2 4 5'
  },
  {
    src: 'https://blog.michaelkeates.co.uk/wp-content/uploads/2022/11/Screenshot-2022-08-02-at-15.46.59.jpg',
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
            //nextSrc={images[(photoIndex + 1) % images.length]}
            //prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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
      </div>
    )
  }
}

export default ImageViewer
