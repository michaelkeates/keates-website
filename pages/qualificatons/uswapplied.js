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
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="USW Applied Computing">
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
          BSc (Hons) Applied Computing{' '}
          <Badge
            bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
            color=""
          >
            2022-2023
          </Badge>
        </Title>
      </Box>
      <P>
        Have been accepted to study the BSc Applied Computing course that is
        offered by the University of South Wales. The course offers a thorough
        grounding in the necessary skills to open up a flexible career in
        computing working in different roles. This suits my skillset perfectly
        as I have experience and skills in different sectors of the IT industry.
      </P>
      <P>
        The year brought many challenges that included University strikes
        initiated by the UCU where a large amount of lectures were cancelled, as
        well as the Rail Strikes which made it difficult and times impossible to
        attent lectures due to being based in Newport and the campus in
        Treforest. So a majority of the work was done remotely without assistant
        from a number of lecturers.
      </P>
      <P>
        I still worked to the best of my abilities to achieve a overall grade of
        First, however at this time the overall grade does not reflect this due
        to the Marking and Assessment boycott and still awaiting results for an
        assigment that has not been marked. Currently have passed the course
        with a Pass Degree which is not reflective of my results.
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
            Year 3 Performance
          </Heading>
          <Divider />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Individual Project - Informatics</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS3D660</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>75%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
          <TableContainer
            marginTop="25px"
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            fontSize="10px"
          >
            <Table
              variant="striped"
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              size="md"
            >
              <Thead>
                <Tr>
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Dissertation / Major Project 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.8</Td>
                  <Td isNumeric>75</Td>
                </Tr>
                <Tr>
                  <Td>Presentation (Synchronous Onsite) 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.2</Td>
                  <Td isNumeric>75</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr></Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Advanced Databases and Modelling</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS3S662</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>81%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
          <TableContainer
            marginTop="25px"
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            fontSize="10px"
          >
            <Table
              variant="striped"
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              size="md"
            >
              <Thead>
                <Tr>
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Onsite Closed Book Examination 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.4</Td>
                  <Td isNumeric></Td>
                </Tr>
                <Tr>
                  <Td>Portfolio 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.6</Td>
                  <Td isNumeric>81</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px" marginBottom="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Advanced Internet and Mobile Computing</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS3S664</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>PENDING</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>PENDING</span>
            </ListItem>
          </List>
          <P>
            {' '}
            Due to the Marking and Assessment boycott set by the UCU, result for
            this module is not avaliable. However, I am predicted a first for
            this module.
          </P>
          <TableContainer
            marginTop="25px"
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            fontSize="11px"
          >
            <Table
              variant="striped"
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              size="md"
            >
              <Thead>
                <Tr>
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Practical Coursework 1 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>77</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 2 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric></Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>GIS and the Spatial Web</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS3S665</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>77%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
          <TableContainer
            marginTop="25px"
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            fontSize="11px"
          >
            <Table
              variant="striped"
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              size="md"
            >
              <Thead>
                <Tr>
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Portfolio 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.3</Td>
                  <Td isNumeric>79</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 1 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.3</Td>
                  <Td isNumeric>88</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 2 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.4</Td>
                  <Td isNumeric>68</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td isNumeric></Td>
                  <Td isNumeric></Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>The Computing Professional in Practice</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IY3S664</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>60%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>PASS</span>
            </ListItem>
          </List>
          <TableContainer
            marginTop="25px"
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            fontSize="11px"
          >
            <Table
              variant="striped"
              borderRadius="lg"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              size="md"
            >
              <Thead>
                <Tr>
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Online Open Book Examination 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>56</Td>
                </Tr>
                <Tr>
                  <Td>Report 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>63</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
          <Divider marginTop="30px" marginBottom="60px" />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
//export { getServerSideProps } from '../../components/chakra'
