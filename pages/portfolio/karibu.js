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
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Portfolio, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Lightbox from '../../components/galleries/karibu'

const Work = () => (
  <Layout title="Karibu">
    <Container>
      <Box
        borderRadius="lg"
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        paddingTop="25px;"
        paddingBottom="7px;"
        marginBottom="2rem"
      >
        <Portfolio>
          Karibu{' '}
          <Badge
            bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
            color=""
          >
            2021
          </Badge>
        </Portfolio>
      </Box>
      <Center my={6}>
        <Image
          src="https://blog.michaelkeates.co.uk/wp-content/uploads/2022/08/title_karibu2.png"
          alt="icon"
          height="128px"
        />
      </Center>
      <Divider my={6} />
      <Heading as="h4" fontSize={16} my={2}>
        <Center>Information</Center>
      </Heading>
      <P>
        Note: Don’t forget to develop your website to demonstrate the ‘look and
        feel’ of your designs (i.e. the impressions you have chosen to embody).
        Equal consideration needs to be given to the look and functionality of
        the website to ensure that it has the competitive edge including good
        sensible use of media resources such as images, sounds and video. The
        website should be developed in Adobe Dreamweaver and should be of a
        standard that would be professional enough to convince and satisfy a
        potential paid client. The layout of a website needs to respond to the
        dimensions of at least one of the devices (as designed for in Coursework
        1). Marks will be rewarded for extended functionality incorporating CSS
        and Javascript as well as animated features (e.g. animated buttons
        and/or opening splash screen and/or an interactive rolling banner etc)
        using Adobe Flash (or equivalent).
      </P>
      <Divider my={6} />
      <P>
        I achieved a score of 82% for this submission.
      </P>
      <br></br>
      <Divider my={6} />
      <List>
        <Heading as="h4" fontSize={16}>
          <Center>Details</Center>
        </Heading>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2021/04/13</span>
        </ListItem>
      </List>
      <br></br>
      <Divider my={6} />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>
      <Lightbox />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
