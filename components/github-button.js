import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import nextLink from 'next/link'

const GitHubButton = () => {
  const toggleColorMode = () => {
    const githubUrl = 'https://github.com/michaelkeates'

    //use window.location to navigate to the GitHub URL
    window.open(githubUrl, '_blank');
  }

  return (
    <IconButton
      aria-label="Toggle theme"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
      padding="10px"
      boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
      color={useColorModeValue('blackAlpha.900', 'whiteAlpha.600')}
      icon={<IoLogoGithub />}
      onClick={toggleColorMode}
    />
  )
}

export default GitHubButton
