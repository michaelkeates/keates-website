import { useState } from 'react'
import { gql } from '@apollo/client'
import { SimpleGrid, Box, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import NextLink from 'next/link'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Button, useColorModeValue, Container } from '@chakra-ui/react'
import { getApolloClient } from '../lib/github'
import Bubble from '../components/bubbleheader'

import { GET_USER_REPOSITORIES } from '../lib/queries'

function dayMonth(data) {
  const monthNames = [
    'null',
    'January',
    'February',
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

  //remove 0 from 02, 03, etc. until 10
  if (day[0] === '0') {
    day = day.slice(1, 2)
  }

  //concatenate the two together again and return
  var formatted = monthNames[month] + ' ' + day + ', ' + year

  return formatted
}

export default function Home({ repository }) {
  const [currentPage, setCurrentPage] = useState(1)
  const repositoriesPerPage = 6

  const startIndex = (currentPage - 1) * repositoriesPerPage
  const endIndex = startIndex + repositoriesPerPage
  const repositoriesToDisplay = repository.slice(startIndex, endIndex)

  const totalPages = Math.ceil(repository.length / repositoriesPerPage)

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
  }

  const isBeginning = currentPage === 1
  const isEnd = currentPage === totalPages

  return (
    <Layout>
      <Container>
        <Bubble text="Check out my current and past projects!" emoji="🚀" />
        <SimpleGrid columns={[2, 2, 2]} gap={4}>
          {repositoriesToDisplay.map((item, index) => {
            const thumb = item.openGraphImageUrl
            const github = item.url

            return (
              <Section key={item.name}>
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
        <SimpleGrid columns={[2, 2, 2]} gap={4}>
          <Button
            onClick={goToPreviousPage}
            disabled={isBeginning}
            opacity={isBeginning ? 0.5 : 1}
            style={{ pointerEvents: isBeginning ? 'none' : 'auto' }}
            leftIcon={<ChevronLeftIcon />}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            _hover={{
              bg: useColorModeValue('#ffffff', '#828282')
            }}
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
          >
            Previous
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={isEnd}
            opacity={isEnd ? 0.5 : 1}
            style={{ pointerEvents: isEnd ? 'none' : 'auto' }}
            rightIcon={<ChevronRightIcon />}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            _hover={{
              bg: useColorModeValue('#ffffff', '#828282')
            }}
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
          >
            Next
          </Button>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const apolloClient = getApolloClient()

  const { data } = await apolloClient.query({
    query: GET_USER_REPOSITORIES
  })

  const repository = data?.user.repositories.edges
    .map(({ node }) => node)
    .map(rep => ({
      ...rep,
      path: `/repositories/${rep.name}`
    }))

  return {
    props: {
      repository,
      cookies: req.headers.cookie ?? ''
    }
  }
}
