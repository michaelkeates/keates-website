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
import { useQuery } from '@apollo/client'
import Bubble from '../components/bubbleheader'
import LoadingLink from '../components/loadinglink'
import { useRouter } from 'next/router' // Add this import

import { GET_USER_REPOSITORIES } from '../lib/queries'
import { color } from 'framer-motion'

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
  const apolloClient = getApolloClient() // Get Apollo client instance
  const { loading, error, data } = useQuery(GET_USER_REPOSITORIES, {
    fetchPolicy: 'cache-first', // Add the fetchPolicy here
    client: apolloClient // Provide the client instance to the hook
  })

  const repositories = data?.user?.repositories?.edges || []

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
        <SimpleGrid columns={[1, null, 2]} gap={4}>
          {repositoriesToDisplay.map((item, index) => {
            const thumb = item.openGraphImageUrl
            const github = item.url

            const languages = item.languages.edges

            const totalLanguageSize = languages.reduce(
              (acc, lang) => acc + lang.size,
              0
            )

            const languageLengths = languages.map(lang => ({
              name: lang.node.name,
              color: lang.node.color,
              width: (lang.size / totalLanguageSize) * 100
            }))

            let cumulativePercentage = 0
            const languagesAboveOnePercent = languageLengths.filter(lang => {
              if (lang.width >= 1) {
                return true
              } else {
                cumulativePercentage += lang.width
                return false
              }
            })

            if (cumulativePercentage > 0) {
              languagesAboveOnePercent.push({
                name: 'Other',
                color: '#808080', // Grey color
                width: cumulativePercentage
              })
            }

            const sortedLanguages = languagesAboveOnePercent
              .slice()
              .sort((a, b) => b.width - a.width)

            return (
              <Box
                key={item.name}
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '5px',
                      position: 'relative',
                      marginTop: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    {sortedLanguages.map((lang, index) => (
                      <div
                        key={index}
                        style={{
                          width: `${lang.width}%`,
                          height: '8px',
                          backgroundColor: lang.color,
                          marginRight: '1px',
                          boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.05);'
                        }}
                      ></div>
                    ))}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '-4px',
                        width: '8px',
                        height: '100%',
                        backgroundColor: sortedLanguages[0].color,
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                        zIndex: '-1'
                      }}
                    ></div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '-4px',
                        width: '8px',
                        height: '100%',
                        backgroundColor:
                          sortedLanguages[sortedLanguages.length - 1].color,
                        borderTopRightRadius: '4px',
                        borderBottomRightRadius: '4px',
                        zIndex: '-1'
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '12px'
                    }}
                  >
                    {sortedLanguages.map((lang, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-block',
                            backgroundColor: lang.color,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            marginBottom: '6px',
                            color: '#ffffff'
                          }}
                        >
                          {lang.name}
                        </div>
                        <div>{lang.width.toFixed(1)}%</div>
                      </div>
                    ))}
                  </div>
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                    whiteSpace="normal"
                    marginTop="20px"
                  >
                    🗓️ {dayMonth(item.updatedAt)}
                  </Badge>
                </GridItem>
                <LoadingLink href={item.path} passHref scroll={false}>
                  <Button
                    boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                    fontSize="14px"
                    marginTop="15px"
                    marginBottom="5px"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    _hover={{
                      bg: useColorModeValue('#ffffff', '#828282')
                    }}
                  >
                    Read More
                  </Button>
                </LoadingLink>
              </Box>
            )
          })}
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={4} marginTop="20px">
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

// Add the getStaticProps function to fetch the specific post data
//export async function getStaticProps() {
//  const apolloClient = getApolloClient()

//  const { data } = await apolloClient.query({
//    query: GET_USER_REPOSITORIES
//  })

//  const repository = data?.user.repositories.edges
//    .map(({ node }) => node)
//    .map(rep => {
//      return {
//        ...rep,
//        path: `/repositories/${rep.name}`
//      }
//    })

//  return {
//    props: {
//      repository
//    }
//  }
//}

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
