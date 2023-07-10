//import Head from 'next/head'
import { gql } from '@apollo/client'
import { Heading, SimpleGrid, Box, Badge, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import NextLink from 'next/link'
import Image from 'next/image'
import { GET_ALL_POSTS } from '../lib/queries';

import {
  //Link,
  //Box,
  Button,
  //  List,
  //  ListItem,
  useColorModeValue
  //chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { getApolloClient } from '../lib/wordpress'

import styles from '../styles/Home.module.css'
import styles2 from '../styles/emoji.module.css'

function dayMonth(data) {
  const monthNames = [
    //why do i have to include null?
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

export default function Home({ posts }) {
  return (
    <Layout title="Portfolio">
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          padding="10px"
          boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
        >
          <a className={styles2.emailTitleLink}>
            View the latest posts that I have written!
            <span className={styles2.emojiTitle} style={{ marginLeft: '8px' }}>
              📃
            </span>
          </a>
        </Box>
        <Section delay={0.2}>
          <SimpleGrid columns={[2, 2, 2]} gap={4}>
            {posts &&
              posts.length > 0 &&
              posts.map(post => {
                const thumb = post.featuredImage.node.sourceUrl
                return (
                  <Section delay={0.1}>
                    <Box
                      borderRadius="lg"
                      textAlign="center"
                      mb={-1}
                      p={4}
                      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                      css={{ backdropFilter: 'blur(10px)' }}
                      padding="15px"
                      boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                    >
                      <GridItem thumbnail={thumb} title={post.title}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt
                          }}
                        />
                        <br></br>
                        <Badge
                          bg={useColorModeValue(
                            'whiteAlpha.100',
                            'whiteAlpha.000'
                          )}
                          color=""
                          whiteSpace="normal"
                        >
                          🗓️ {dayMonth(post.date)}
                        </Badge>
                      </GridItem>
                      <br></br>
                      <NextLink href={post.path} passHref scroll={false}>
                        <Button
                          width="100%"
                          alignItems="center"
                          rightIcon={<ChevronRightIcon />}
                          bg={useColorModeValue(
                            'whiteAlpha.500',
                            'whiteAlpha.200'
                          )}
                          _hover={{
                            bg: useColorModeValue('#ffffff', '#828282')
                          }}
                          boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                        >
                          Read More
                        </Button>
                      </NextLink>
                    </Box>
                  </Section>
                )
              })}

            {!posts || (posts.length === 0 && <li>Oops, no posts found!</li>)}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: GET_ALL_POSTS
  });

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map(post => {
      return {
        ...post,
        path: `/posts/${post.slug}`
      };
    });

  return {
    props: {
      posts
    }
  };
}
