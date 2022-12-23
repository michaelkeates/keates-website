import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Divider
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
  InfoIcon,
  StarIcon,
  ViewIcon
} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        padding="15px;"
      >
        Hi! I&apos;m a developer and designer based in South Wales! 🏴󠁧󠁢󠁷󠁬󠁳󠁿
      </Box>

      <Box display={{ md: 'flex' }} paddingTop="25px">
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            fontFamily="Roboto"
            fontWeight=""
          >
            Michael Keates
          </Heading>
          <p>Developer / Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
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
              width="110"
              height="110"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h2" size="1xl" fontStyle="italic" textAlign="center" paddingTop="25px">
          "I am a organised and highly creative individual that thrives on
          working at the utmost level of professionalism."
        </Heading>
        <Section delay={0.1}>
          <Heading as="h2" size="xs" textAlign="center" fontWeight="thin" paddingTop="35px">
            Welcome to my portfolio website! Hope you like what you see and
            enjoy your visit!
          </Heading>
          <Divider my={6} />
          <SimpleGrid columns={[3, 2, 3]} gap={6}>
            <NextLink href="/about" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                //bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                _hover={{ bg: useColorModeValue('#ffffff', '#828282') }}
                width="100%"
              >
                CV
              </Button>
            </NextLink>
            <NextLink href="/repositories" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                //bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                _hover={{ bg: useColorModeValue('#ffffff', '#828282') }}
                width="100%"
              >
                Portfolio
              </Button>
            </NextLink>
            <NextLink href="/posts" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                //bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                _hover={{ bg: useColorModeValue('#ffffff', '#828282') }}
                width="100%"
              >
                Blog
              </Button>
            </NextLink>
          </SimpleGrid>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
