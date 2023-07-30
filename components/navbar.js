import Logo from './logo'
import React from 'react'
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
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import SearchToggleButton from './search-toggle-button'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import LoadingLink from './loadinglink';

const Navbar = props => {
  const { path } = props;

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
          <LoadingLink href="/about" path={path}>
            About
          </LoadingLink>
          <LoadingLink href="/repositories" path={path}>
            Portfolio
          </LoadingLink>
          <LoadingLink href="/posts" path={path}>
            Blog
          </LoadingLink>
          <LoadingLink
            target="_blank"
            href="https://github.com/michaelkeates"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
          </LoadingLink>
        </Stack>

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
                <LoadingLink href="/about" passHref>
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
                </LoadingLink>
                <LoadingLink href="/repositories" passHref>
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
                </LoadingLink>
                <LoadingLink href="/posts" passHref>
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
                </LoadingLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
