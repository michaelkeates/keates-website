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
import Lightbox from '../../components/galleries/mist'

const Work = () => (
  <Layout title="Mist">
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
          Mist{' '}
          <Badge
            bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
            color=""
          >
            2021-2022
          </Badge>
        </Portfolio>
      </Box>
      <Center my={6}>
        <Image
          src="/images/portfolio/mist_logo.png"
          alt="icon"
          height="128px"
        />
      </Center>
      <Divider my={6} />
      <Heading as="h4" fontSize={16} my={2}>
        <Center>Information</Center>
      </Heading>
      <P>
        I was required by the University of South Wales for the first assigment
        is to design and develop a HTML5 / CSS3 responsive (front end only)
        website which makes use of the latest HTML5 tags to allow the website to
        function across various sized displays and devices.
      </P>
      <br></br>
      <P>
        The second assigment and continuation from the first coursework was to
        implement a client/server based (dynamic) website with the aim of
        extending the previous website from coursework 1 to include a number of
        backend features.
      </P>
      <Divider my={6} />
      <h6>Frontend</h6>
      <UnorderedList ml={4} my={4} fontSize="13px">
        <ListItem>
          Consists of at least several pages in HTML5 /CSS3 standard.
        </ListItem>
        <ListItem>
          Incorporates several HTML5 tags to showcase the new features of HTML5.
        </ListItem>
        <ListItem>
          Has sufficient multimedia and other web technologies including text,
          media, audio, video and JavaScript.
        </ListItem>
        <ListItem>
          Suitable navigation including (responsive, internal and external).
        </ListItem>
        <ListItem>
          The site must employ media queries to enable the site to adjust its
          display for different viewports.
        </ListItem>
        <ListItem>Contain API access (such as Location).</ListItem>
      </UnorderedList>
      <br></br>
      <h6>Backend</h6>
      <UnorderedList ml={4} my={4} fontSize="13px">
        <ListItem>
          A suitable backend database in MySQL created using PhPMyAdmin.
        </ListItem>
        <ListItem>
          A client to server side scripting language (e.g. PhP) Your dynamic
          website should have the following functionality spread across a number
          of web pages.
        </ListItem>
        <ListItem>
          To retrieve existing information from the database. Not all
          information in your website needs to be populated from information
          from your database however the more information that is retrieved the
          more marks that will be gained.
        </ListItem>
        <ListItem>
          To incorporate an administration menu link into your previous website
          to allow admin access to perform the following tasks: a. to add
          information to the database via data entry form; b. to update
          information in the database; c. to delete information from the
          database.
        </ListItem>
        <ListItem>
          Incorporated secure log-in admin access. You should also be able to
          log-out of the admin account to prevent unauthorised access.
        </ListItem>
        <ListItem>
          Incorporated secure log-in admin access. You should also be able to
          log-out of the admin account to prevent unauthorised access.
        </ListItem>
      </UnorderedList>
      <Divider my={6} />
      <P>
        I achieved a overall score of 86% for this module.
      </P>
      <br></br>
      <Divider my={6} />
      <List>
        <Heading as="h4" fontSize={16}>
          <Center>Details</Center>
        </Heading>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS, PHP, mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Username</Meta>
          <span>admin</span>
        </ListItem>
        <ListItem>
          <Meta>Password</Meta>
          <span>admin</span>
        </ListItem>
        <ListItem>
          <Meta>Live Demo</Meta>
          <Link href="https://mist.michaelkeates.co.uk">
            Click to view live demo
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/04/13</span>
        </ListItem>
      </List>
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
