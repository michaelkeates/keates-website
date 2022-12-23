//import Head from 'next/head'
import { gql } from '@apollo/client'
import { Heading, SimpleGrid, Box, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, PortfolioGridItem } from '../components/grid-item'
import NextLink from 'next/link'
import {
  ChevronRightIcon,
  PhoneIcon,
  EmailIcon,
  InfoIcon
} from '@chakra-ui/icons'
import {
  //Link,
  //Box,
  Button,
  //  List,
  //  ListItem,
  useColorModeValue,
  Container
  //chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { getApolloClient } from '../lib/github'
import thumbusw from '../public/images/works/usw_logo.png'
import thumbcc from '../public/images/works/cc_logo.png'
import styles from '../styles/Home.module.css'
import { IoLogoGithub } from 'react-icons/io5'

function dayMonth(data) {
  const monthNames = [
    'null',
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  //split up the string to get the day and month
  var month = parseInt(data.slice(5, 7))
  var day = data.slice(8, 10)
  var year = data.slice(0, 4)

  //remove 0 from 02, 03 etc ... until 10
  if (day[0] == '0') {
    day = day.slice(1, 2)
  }

  //concatenate the two together again and return
  var formatted = monthNames[month] + ' ' + day + ', ' + year

  return formatted
}

export default function Home({ repository }) {
  return (
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
          Check out my current and past projects! 🚀
        </Box>

        <SimpleGrid columns={[2, 2, 2]} gap={4}>
          {repository.map(item => {
            const thumb = item.openGraphImageUrl
            const github = item.url
            return (
              <Section delay={0.3}>
                <Box
                  borderRadius="lg"
                  mb={-1}
                  p={4}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <GridItem
                    id={github}
                    thumbnail={thumb}
                    title={item.name}
                    target="_blank"
                  >
                    {item.description}
                    <br></br>
                    <Badge
                      bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                      color=""
                      whiteSpace="normal"
                      marginTop="10px"
                    >
                      🗓️ {dayMonth(item.updatedAt)}
                    </Badge>
                  </GridItem>
                  <br></br>
                  <NextLink href={item.path} passHref scroll={false}>
                    <Button
                      width="100%"
                      alignItems="center"
                      rightIcon={<ChevronRightIcon />}
                      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                      _hover={{
                        bg: useColorModeValue('#ffffff', '#828282')
                      }}
                    >
                      Read More
                    </Button>
                  </NextLink>
                </Box>
              </Section>
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = getApolloClient()

  const { data } = await apolloClient.query({
    query: gql`
      {
        user(login: "michaelkeates") {
          repositories(first: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {
            edges {
              node {
                id
                name
                object(expression: "HEAD:README.md") {
                  ... on Blob {
                    text
                  }
                }
                openGraphImageUrl
                url
                description
                languages(first: 10) {
                  nodes {
                    id
                    name
                  }
                  totalSize
                }
                updatedAt
              }
            }
          }
        }
      }
    `
  })

  const repository = data?.user.repositories.edges
    .map(({ node }) => node)
    .map(rep => {
      return {
        ...rep,
        path: `/repositories/${rep.name}`
      }
    })

  return {
    props: {
      repository
    }
  }
}
