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

      <SimpleGrid columns={1} gap={2} paddingTop="25px">
        <SimpleGrid>
          <Heading as="h3" variant="section-title" fontWeight="">
            Final Year
          </Heading>
          <List my={4}>
            <ListItem>
              <Meta>Individual Project - Informatics</Meta>
              <span>TBC</span>
            </ListItem>
            <ListItem>
              <Meta>The Computing Professional In Practice</Meta>
              <span>TBC</span>
            </ListItem>
            <ListItem>
              <Meta>Advanced Databases and Modelling</Meta>
              <span>TBC</span>
            </ListItem>
            <ListItem>
              <Meta>Advanced Internet and Mobile Computing</Meta>
              <span>TBC</span>
            </ListItem>
            <ListItem>
              <Meta>GIS and the Spatial Web</Meta>
              <span>TBC</span>
            </ListItem>
          </List>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
