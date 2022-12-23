import {
  Container,
  Badge,
  Box,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="HND Computing">
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
        <Title>
          HND Computing{' '}
          <Badge
            bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
            color=""
          >
            2020-2022
          </Badge>
        </Title>
      </Box>
      <P>
        Higher National Diploma (HND) is a academic higher education
        qualification that is equivalent to second year of a Bachelor's degree
        and is practical based. This was a different route as I wasn't suitable
        for the traditional 3 year Bachelor's degree programme. Also the first
        year lectures was all delivered remotely due to Covid-19. This didn't
        affect me as I was determined to perform to the best of my abilities
        which my confirmed grades for both years below showcases. I achieved a
        first for both years.
      </P>

      <SimpleGrid olumns={[1, 1, 1]} gap={2} paddingTop="25px">
        <SimpleGrid>
          <Heading as="h3" variant="section-title" fontWeight="">
            Year 1
          </Heading>
          <List my={1}>
            <ListItem>
              <Meta>Overall</Meta>
              <span>78%</span>
            </ListItem>
            <ListItem>
              <Meta>Computer Systems and Networks</Meta>
              <span>85%</span>
            </ListItem>
            <ListItem>
              <Meta>Software Development</Meta>
              <span>75%</span>
            </ListItem>
            <ListItem>
              <Meta>Professional Practice</Meta>
              <span>72%</span>
            </ListItem>
            <ListItem>
              <Meta>Programming 1</Meta>
              <span>97%</span>
            </ListItem>
            <ListItem>
              <Meta>Web Development</Meta>
              <span>71%</span>
            </ListItem>
            <ListItem>
              <Meta>ISAD 1</Meta>
              <span>75%</span>
            </ListItem>
            <ListItem>
              <Meta>Problem Solving</Meta>
              <span>73%</span>
            </ListItem>
          </List>
        </SimpleGrid>
        <SimpleGrid>
          <Heading as="h3" variant="section-title" fontWeight="">
            Year 2
          </Heading>
          <List my={1}>
            <ListItem>
              <Meta>Overall</Meta>
              <span>80%</span>
            </ListItem>
            <ListItem>
              <Meta>Individual Project</Meta>
              <span>82%</span>
            </ListItem>
            <ListItem>
              <Meta>Programming 2</Meta>
              <span>92%</span>
            </ListItem>
            <ListItem>
              <Meta>Responsive Web Development</Meta>
              <span>86%</span>
            </ListItem>
            <ListItem>
              <Meta>ISAD 2</Meta>
              <span>71%</span>
            </ListItem>
            <ListItem>
              <Meta>Security</Meta>
              <span>73%</span>
            </ListItem>
            <ListItem>
              <Meta>Architecture</Meta>
              <span>77%</span>
            </ListItem>
          </List>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
