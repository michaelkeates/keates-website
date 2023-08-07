import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  Divider
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import styles from '../styles/emoji.module.css'
import Bubble from '../components/bubbleheader'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Bubble
        text="Hi! I'm a software developer based in South Wales!"
        emoji="🏴󠁧󠁢󠁷󠁬󠁳󠁿"
      />
      <Box display={{ md: 'flex' }} paddingTop="25px" paddingBottom="25px">
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            fontFamily="Roboto"
            fontWeight=""
          >
            Michael Keates
          </Heading>
          <p>Software Developer</p>
          <Heading as="h2" size="1xl" fontWeight={0} paddingTop="25px">
            "I am a dedicated and hardworking individual with a strong
            background in all things computing and technology."
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            boxShadow="0px 0px 2px 2px rgba(0,0,0,0.1)"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/mike.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Divider />
      <Section delay={0.1}>
        <Section delay={0.1}>
          <Heading
            as="h2"
            size="xs"
            fontWeight={0}
            textAlign="center"
            paddingTop="35px"
          >
            Welcome to my portfolio website! Hope you like what you see and
            enjoy your visit!
          </Heading>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
