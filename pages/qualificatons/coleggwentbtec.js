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
import { Title, Portfolio, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="BTEC Computing">
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
        BTEC Computing{' '}
          <Badge
            bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
            color=""
          >
            2019-2020
          </Badge>
        </Title>
      </Box>
      <P>
        BTEC or otherwise known as 'Business and Technology Education Council'
        is a practical-based, vocational qualification which provides
        opportunities to gain hands-on experience in a field such as Computing.
        A BTEC Level 3 which I studied and completed is equivalent to A-levels
        which I never completed as I only managed to progress to AS Levels
        (First Year of A-levels).
      </P>
      <P>
        During my studies I also took part in the Amazon Web Services
        Competition, where the subject was promoting the understanding of the
        'causes', 'impacts' of, and 'solutions' to Knife Crime. I progressed to
        the finals with a solution produced by the group I was with but sadly
        the competition was cancelled due to the Covid-19 epidermic.
      </P>
      <P>
        As well as being in lockdown towards the end of the academic year,
        grades that were given were predicted due to the situation which I was
        disappointed to say the least, however I achieved an overall grade of
        Distinction.
      </P>

      <SimpleGrid olumns={[1, 1, 1]} gap={2} paddingTop="25px">
        <SimpleGrid>
          <Heading as="h3" variant="section-title" fontWeight="">
            Grades
          </Heading>
          <List my={1}>
            <ListItem>
              <Meta>Overall</Meta>
              <span>Distinction</span>
            </ListItem>
            <ListItem>
              <Meta>Principles of Computer Science</Meta>
              <span>Pass</span>
            </ListItem>
            <ListItem>
              <Meta>Fundamentals of Computer Systems</Meta>
              <span>Pass</span>
            </ListItem>
            <ListItem>
              <Meta>IT Systems Security and Encryption</Meta>
              <span>Distinction</span>
            </ListItem>
            <ListItem>
              <Meta>Business Applications of Social Media</Meta>
              <span>Distinction</span>
            </ListItem>
            <ListItem>
              <Meta>Computer Games Development</Meta>
              <span>Distinction</span>
            </ListItem>
            <ListItem>
              <Meta>Mobile Apps Development</Meta>
              <span>Distinction</span>
            </ListItem>
          </List>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
