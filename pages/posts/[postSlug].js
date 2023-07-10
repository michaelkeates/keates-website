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
import { ChevronRightIcon, CopyIcon } from '@chakra-ui/icons'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { getApolloClient } from '../../lib/wordpress'

import { Title, Portfolio, Blog, WorkImage, Meta } from '../../components/work'

import styles from '../../styles/Home.module.css'

import AuthorBio from '../../components/post/author-bio'

import { GET_POST_BY_SLUG, GET_ALL_POSTS } from '../../lib/queries'

import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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

export default function Post({ post }) {
  const blockquoteRefs = useRef([])
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const blockquotes = Array.from(blockquoteRefs.current.querySelectorAll('.wp-block-code'));
      blockquotes.forEach((blockquote) => {
        if (!blockquote.querySelector('.copy-btn')) {
          const quoteText = blockquote.textContent;
          const copyButton = document.createElement('div');
          copyButton.style.position = 'absolute';
          copyButton.style.top = '0';
          copyButton.style.right = '0';
          copyButton.style.padding = '7px';
          copyButton.style.opacity = '0';
          copyButton.style.transition = 'opacity 0.3s ease-in-out';

          ReactDOM.render(
            <Button
              className="copy-btn"
              onClick={() => {
                navigator.clipboard.writeText(quoteText);
              }}
              onMouseOver={() => {
                copyButton.style.opacity = '1';
              }}
              onMouseOut={() => {
                copyButton.style.opacity = '0';
              }}
              leftIcon={<CopyIcon />}
            >
            </Button>,
            copyButton
          );

          blockquote.addEventListener('mouseover', () => {
            copyButton.style.opacity = '1';
          });
          blockquote.addEventListener('mouseout', () => {
            copyButton.style.opacity = '0';
          });

          blockquote.style.position = 'relative';
          blockquote.style.display = 'inline-block';
          blockquote.style.paddingTop = '25px';
          blockquote.appendChild(copyButton);
        }
      });
    }
  }, []);

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
                <div className="post-content">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    ref={el => (blockquoteRefs.current = el)}
                  />
                </div>
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
    query: GET_POST_BY_SLUG,
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
    query: GET_ALL_POSTS
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
