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
  //  List,
  //  ListItem,
  useColorModeValue,
  chakra,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { getApolloClient } from '../../lib/wordpress'

import { Title, Portfolio, Blog, WorkImage, Meta } from '../../components/work'

import styles from '../../styles/Home.module.css'

import AuthorBio from '../../components/post/author-bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

function dayMonth(data) {
  const monthNames = [
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

export default function Post({ post }) {
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
            >
              <Blog>
                <div>
                  {post.title}{' '}
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                  >
                    {dayMonth(post.date)}
                  </Badge>
                </div>
              </Blog>
            </Box>
            <h1 className={styles.title}>{post.title}</h1>
            <SimpleGrid paddingTop="25px" paddingBottom="25px">
              <Divider my={1} />
              <Paragraph>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content
                  }}
                />
              </Paragraph>
            </SimpleGrid>
            <Divider my={6} />
            <AuthorBio />
            <NextLink href="/posts" passHref scroll={false}>
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
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              firstName
              lastName
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            edges {
              node {
                name
              }
            }
          }
          modified
        }
      }
    `,
    variables: {
      slug: postSlug
    }
  })

  const post = data?.data.postBy

  const site = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      post,
      site
    }
  }
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      {
        posts(first: 10000) {
          edges {
            node {
              id
              title
              slug
              date
              categories {
                nodes {
                  name
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
              excerpt(format: RENDERED)
            }
          }
        }
      }
    `
  })

  const posts = data?.data.posts.edges.map(({ node }) => node)

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          postSlug: slug
        }
      }
    }),
    fallback: false
  }
}
