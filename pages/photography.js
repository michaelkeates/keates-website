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

const Photography = () => (
  <Layout title="Photography">
    <Container>
      <Section delay={0.6}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          padding="15px;"
        >
          Below are some of my photos. All Rights Reserved. 📷
        </Box>
        <Lightbox
        />
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
