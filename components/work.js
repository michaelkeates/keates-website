import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import LoadingLink from './loadinglink'

export const Title = ({ children }) => (
  <Box>
    <LoadingLink href="/about" passHref>
      <Link fontSize={16}>About</Link>
    </LoadingLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={15} mb={4} >
      {children}
    </Heading>
  </Box>
)

export const Portfolio = ({ children }) => (
  <Box>
    <LoadingLink href="/portfolio" passHref>
      <Link fontSize={16}>Portfolio</Link>
    </LoadingLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={15} mb={4} >
      {children}
    </Heading>
  </Box>
)

export const Blog = ({ children }) => (
  <Box>
    <LoadingLink href="/posts" passHref>
      <Link fontSize={16}>Blog</Link>
    </LoadingLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h7" fontSize={15} mb={4} >
      {children}
    </Heading>
  </Box>
)

export const Repo = ({ children }) => (
  <Box>
    <LoadingLink href="/repositories" passHref>
      <Link fontSize={16}>Portfolio</Link>
    </LoadingLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h7" fontSize={15} mb={4} >
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge fontSize="10px" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} color="" css={{ backdropFilter: 'blur(10px)' }} padding="7px;" margin="5px" mr={3}>
    {children}
  </Badge>
)
