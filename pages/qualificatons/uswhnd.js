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
        boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
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
      <SimpleGrid columns={[1, 1, 1]} gap={2} paddingTop="25px">
        <SimpleGrid>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={2}
          >
            Year 1 Performance
          </Heading>
          <Divider />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Professional Practice in Computing</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS1H422</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>72%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
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
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Oral Assessment</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>65</Td>
                </Tr>
                <Tr>
                  <Td>Portfolio 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>79</Td>
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
              <span>Software Development</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS1H428</span>
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
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Practical Coursework 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>1</Td>
                  <Td isNumeric>75</Td>
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
              <span>Information Systems Analysis and Design 1</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS1S451</span>
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
                  <Td isNumeric>0.4</Td>
                  <Td isNumeric>70</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.6</Td>
                  <Td isNumeric>79</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Computer Systems and Networks</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS1S454</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>85%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
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
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>MCQ Exercise</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>97</Td>
                </Tr>
                <Tr>
                  <Td>Report 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>72</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Computer Programming 1</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS1S455</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>97%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
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
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>98</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>95</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Web Development</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS1S456</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>71%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
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
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>60</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>82</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Problem Solving for Computing</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>MS1S463</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>73%</span>
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
                  <Td>Set Tasks - not-time constrained 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>79</Td>
                </Tr>
                <Tr>
                  <Td>Time Constrained Assessment 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>66</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
          <Divider marginTop="30px" marginBottom="60px" />
        </SimpleGrid>
        <SimpleGrid>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={2}
          >
            Year 2 Performance
          </Heading>
          <Divider />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Information Systems Analysis and Design 2</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS2S551</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>71%</span>
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
                  <Td>Portfolio 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>69</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 1 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
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
              <span>HND Individual Project</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS2S552</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>82%</span>
            </ListItem>
            <ListItem>
              <Meta>Grade</Meta>
              <span>DIST</span>
            </ListItem>
          </List>
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
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Oral Assessment 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.2</Td>
                  <Td isNumeric>88</Td>
                </Tr>
                <Tr>
                  <Td>Portfolio 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.7</Td>
                  <Td isNumeric>80</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Systems Architecture and Modelling</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS2S554</span>
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
                  <Th>Assessment</Th>
                  <Th>Out of</Th>
                  <Th isNumeric>Weight</Th>
                  <Th isNumeric>Module Mark</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Report 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>72</Td>
                </Tr>
                <Tr>
                  <Td>Report 2</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>81</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Computer Programming 2</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS2S555</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>92%</span>
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
                  <Td isNumeric>0.4</Td>
                  <Td isNumeric>90</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 1 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.6</Td>
                  <Td isNumeric>93</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Responsive Web Development</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IS2S556</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>86%</span>
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
                  <Td>Practical Coursework 1 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>86</Td>
                </Tr>
                <Tr>
                  <Td>Practical Coursework 2 (Asynch)</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>86</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <Divider marginTop="30px" />
          <List marginTop="15px">
            <ListItem>
              <Meta>Title</Meta>
              <span>Computer Systems Security</span>
            </ListItem>
            <ListItem>
              <Meta>Module</Meta>
              <span>IY2S521B</span>
            </ListItem>
            <ListItem>
              <Meta>Result</Meta>
              <span>73%</span>
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
                  <Td>Practical Written Work 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>67</Td>
                </Tr>
                <Tr>
                  <Td>Set Tasks - not-time constrained 1</Td>
                  <Td>100</Td>
                  <Td isNumeric>0.5</Td>
                  <Td isNumeric>79</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
          <Divider marginTop="30px" />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
