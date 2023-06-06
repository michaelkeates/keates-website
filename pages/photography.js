import {
  //Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  //  List,
  //  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Lightbox from '../components/galleries/photography'
import styles from '../styles/emoji.module.css'

const Photography = () => (
  <Layout title="Photography">
    <Container>
      <Section delay={0.6}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          padding="10px"
          boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
        >
          <a className={styles.emailTitleLink}>
            Check out some of my photos!
            <span className={styles.emojiTitle} style={{ marginLeft: '8px' }}>
              📷
            </span>
          </a>
        </Box>
        <Lightbox />
      </Section>
    </Container>
  </Layout>
)

export default Photography
export async function getStaticProps() {
  return {
    props: {
      title: 'Photography'
    }
  }
}
