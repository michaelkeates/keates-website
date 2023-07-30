import Logo from './logo'
import NextLink from 'next/link'
import React, { useState } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import SearchToggleButton from './search-toggle-button'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoFacebook } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        //bg={active ? 'grassTeal' : undefined}
        //bg={active ? useColorModeValue('whiteAlpha.400', 'whiteAlpha.200') : undefined}
        color={active ? '#a6bbce' : active}
        target={target}
        //borderRadius="full"
        fontSize="12"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const [loading, setLoading] = useState(false)

  const handleLinkClick = () => {
    setLoading(true)
  }

  const handleLinkLoaded = () => {
    setLoading(false)
  }

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      //bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{
        backdropFilter: 'blur(10px)',
        transition: 'backdrop-filter 0.3s ease-out'
      }}
      zIndex={999}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/repositories" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Blog
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/michaelkeates"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
          </LinkItem>
        </Stack>

        {loading && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            {/* Use the Chakra UI Spinner component */}
            <Spinner color="blue.500" size="xl" />
          </Box>
        )}

        <Box flex={1} ml={1} align="right">
          <Box ml={2} display={{ base: 'inline-block' }}>
            <ThemeToggleButton />
          </Box>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _focus={{ boxShadow: 'none' }}
              />
              <MenuList
                bg="{useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}"
                css={{ backdropFilter: 'blur(10px)' }}
              >
                <NextLink href="/about" passHref>
                  <MenuItem
                    bg="{useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}"
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    _hover={{
                      bg: useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')
                    }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'none' }}
                    as={Link}
                  >
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href="/repositories" passHref>
                  <MenuItem
                    bg="{useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}"
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    _hover={{
                      bg: useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')
                    }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'none' }}
                    as={Link}
                  >
                    Portfolio
                  </MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem
                    bg="{useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}"
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    _hover={{
                      bg: useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')
                    }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'none' }}
                    as={Link}
                  >
                    Blog
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
