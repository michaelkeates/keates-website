//import Head from 'next/head'
import { gql } from '@apollo/client'
import { SimpleGrid, Box, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, useColorModeValue, Container } from '@chakra-ui/react'
import { getApolloClient } from '../lib/github'
import styles from '../styles/emoji.module.css'

import { GET_USER_REPOSITORIES } from '../lib/queries'

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
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          padding="10px"
          boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
        >
          <a className={styles.emailTitleLink}>
            Check out my current and past projects!
            <span className={styles.emojiTitle} style={{ marginLeft: '8px' }}>
              🚀
            </span>
          </a>
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
                  boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
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
                      boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
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
    query: GET_USER_REPOSITORIES
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
