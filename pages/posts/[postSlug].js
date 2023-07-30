import Head from 'next/head'
import NextLink from 'next/link'
//import Image from 'next/image'

import {
  Textarea,
  Container,
  Flex,
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
import { useMutation } from '@apollo/client'

import { Title, Portfolio, Blog, WorkImage, Meta } from '../../components/work'

import styles from '../../styles/Home.module.css'

import AuthorBio from '../../components/post/author-bio'

import {
  GET_POST_BY_SLUG,
  GET_ALL_POSTS,
  useCreateCommentMutation
} from '../../lib/queries'

import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

//autowinscripts update

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
  const [isCopied, setIsCopied] = useState(false)

  const [newComment, setNewComment] = useState('')
  const [createCommentMutation, { loading, error, data }] =
    useCreateCommentMutation()

  const handleCommentSubmit = async () => {
    try {
      const variables = {
        input: {
          content: newComment,
          commentOn: post.id // Replace 'post.id' with the actual ID of the post you want to comment on
        }
      }
      await createCommentMutation({ variables })
      // Reset the comment input after successful submission
      setNewComment('')
    } catch (error) {
      console.error('Error creating comment:', error)
    }
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      const blockquotes = Array.from(
        blockquoteRefs.current.querySelectorAll('.wp-block-code')
      )
      blockquotes.forEach(blockquote => {
        if (!blockquote.querySelector('.copy-btn')) {
          const quoteText = blockquote.textContent
          const copyButton = document.createElement('div')
          copyButton.style.position = 'absolute'
          copyButton.style.top = '0'
          copyButton.style.right = '0'
          copyButton.style.padding = '7px'
          copyButton.style.opacity = '0'
          copyButton.style.transition = 'opacity 0.3s ease-in-out'

          const handleClick = () => {
            navigator.clipboard.writeText(quoteText)
            setIsCopied(true)
            setTimeout(() => {
              setIsCopied(false)
            }, 2000) // Change the duration here (in milliseconds)
          }

          ReactDOM.render(
            <Button
              className="copy-btn"
              onClick={handleClick}
              onMouseOver={() => {
                copyButton.style.opacity = '1'
              }}
              onMouseOut={() => {
                copyButton.style.opacity = '0'
              }}
            >
              <CopyIcon />
            </Button>,
            copyButton
          )

          blockquote.addEventListener('mouseover', () => {
            copyButton.style.opacity = '1'
          })
          blockquote.addEventListener('mouseout', () => {
            copyButton.style.opacity = '0'
          })

          blockquote.style.position = 'relative'
          blockquote.style.display = 'inline-block'
          blockquote.style.paddingTop = '25px'
          blockquote.appendChild(copyButton)
        }
      })
    }
  }, [isCopied])

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
            <div style={{ marginBottom: '-30px' }}>
              <AuthorBio />
            </div>
          </main>
          <Divider my={6} />
          <div>
            {post.comments.nodes.map(comment => (
              <Box
                key={comment.id}
                borderRadius="lg"
                mb={6}
                p={3}
                alignItems="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                padding="10px"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
              >
                <Flex alignItems="center" mb={2}>
                  {comment.author.node.avatar && (
                    <div>
                      <img
                        src={comment.author.node.avatar.url}
                        alt={`Avatar of ${comment.author.node.name}`}
                        style={{
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px'
                        }}
                      />
                    </div>
                  )}
                  <div style={{ marginLeft: '10px' }}>
                    <div>{comment.author.node.name}</div>
                    <div>{comment.date}</div>
                  </div>
                </Flex>
                <div
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                  style={{ fontSize: '14px', marginLeft: '10px' }}
                />
              </Box>
            ))}
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              alignItems="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
              position="relative"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="space-between"
                height="100%"
              >
                <Textarea
                  placeholder="Enter your comment"
                  size="md"
                  flex="1"
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)} // Use setNewComment instead of setCommentText
                />
                <Button
                  colorScheme="green"
                  position="flex"
                  bottom="5px"
                  right="5px"
                  marginTop="5px"
                  ml="auto"
                  mt={4}
                  onClick={handleCommentSubmit}
                >
                  Submit
                </Button>
              </Flex>
            </Box>
          </div>
        </Section>
      </Container>
    </Layout>
  )
}

// Add the getStaticProps function to fetch the specific post data
export async function getStaticProps({ params }) {
  const apolloClient = getApolloClient()

  const postData = await apolloClient.query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: params.postSlug
    }
  })

  const post = postData?.data?.postBy

  return {
    props: {
      post
    }
  }
}

// Add the getStaticPaths function to specify the dynamic paths
export async function getStaticPaths() {
  const apolloClient = getApolloClient()

  const allPostsData = await apolloClient.query({
    query: GET_ALL_POSTS
  })

  const posts = allPostsData?.data?.posts?.edges

  // Check if posts is defined before mapping over it
  if (!posts) {
    return {
      paths: [],
      fallback: false
    }
  }

  // Create the array of paths with the `params` object containing the dynamic part (postSlug)
  const paths = posts.map(({ node }) => ({
    params: { postSlug: node.slug }
  }))

  return {
    paths,
    fallback: false
  }
}
