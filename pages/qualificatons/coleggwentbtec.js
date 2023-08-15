import {
  Container,
  Badge,
  Box,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider
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
        boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
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

      <SimpleGrid columns={[1, 1, 1]} gap={2} paddingTop="25px">
        <SimpleGrid>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={2}
          >
            BTEC Performance
          </Heading>
          <Divider />
          <TableContainer
            marginTop="25px"
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            fontSize="12px"
          >
            <Table
              variant="striped"
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              size="md"
            >
              <Thead>
                <Tr>
                  <Th>Modules</Th>
                  <Th>Grade</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Principles of Computer Science</Td>
                  <Td>Pass</Td>
                </Tr>
                <Tr>
                  <Td>Fundementals of Computer Systems</Td>
                  <Td>Pass</Td>
                </Tr>
                <Tr>
                  <Td>IT Systems Security and Encryption</Td>
                  <Td>Distinction</Td>
                </Tr>
                <Tr>
                  <Td>Business Applications of Social Media</Td>
                  <Td>Distinction</Td>
                </Tr>
                <Tr>
                  <Td>Computer Games Development</Td>
                  <Td>Distinction</Td>
                </Tr>
                <Tr>
                  <Td>Mobile Apps Development</Td>
                  <Td>Distinction</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr></Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Divider marginTop="30px" marginBottom="60px" />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    },
  };
}