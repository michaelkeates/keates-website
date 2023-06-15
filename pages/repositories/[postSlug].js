//import Head from 'next/head'
import NextLink from 'next/link'
//import Image from 'next/image'
import { gql } from '@apollo/client'

import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Divider,
  List,
  ListItem,
  Center,
  useColorModeValue,
  chakra,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { getApolloClient } from '../../lib/github'
import AuthorBio from '../../components/post/author-bio'

import { Repo } from '../../components/work'

import styles from '../../styles/Home.module.css'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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

export default function Post({ rep }) {
  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <main className={styles.main}>
            <Box
              borderRadius="lg"
              mb={6}
              p={5}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              paddingBottom="6px"
              width="100%"
              marginTop="-4rem"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <Repo>
                <div>
                  {rep.name}{' '}
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                  >
                    {dayMonth(rep.updatedAt)}
                  </Badge>
                </div>
              </Repo>
            </Box>
            <SimpleGrid paddingTop="25px" paddingBottom="25px">
              <Divider my={1} />
              <Paragraph>
                <div
                  dangerouslySetInnerHTML={{
                    __html: rep.object.text
                  }}
                />
              </Paragraph>
              <br></br>
              <Paragraph>
                To view this repository on Github, please click{' '}
                <Link href={rep.url}>here</Link>
              </Paragraph>
            </SimpleGrid>
            <Divider my={6} />
            <AuthorBio />
            <NextLink href="/repositories" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              >
                Go Back
              </Button>
            </NextLink>
          </main>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params

  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      query RepositoriesByName($name: String!) {
        repository(name: $name, owner: "michaelkeates") {
          id
          name
          object(expression: "HEAD:README.md") {
            ... on Blob {
              text
            }
          }
          url
          openGraphImageUrl
          languages(first: 10) {
            edges {
              node {
                name
                id
              }
            }
            totalSize
          }
          updatedAt
        }
      }
    `,
    variables: {
      name: postSlug
    }
  })

  const rep = data?.data.repository

  return {
    props: {
      rep
    }
  }
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      {
        user(login: "michaelkeates") {
          repositories(first: 10) {
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

  const rep = data?.data.user.repositories.edges.map(({ node }) => node)

  return {
    paths: rep.map(({ name }) => {
      return {
        params: {
          postSlug: name
        }
      }
    }),
    fallback: false
  }
}
