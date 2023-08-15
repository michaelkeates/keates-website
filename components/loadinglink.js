import React, { useState } from 'react'
import NextLink from 'next/link'
import { Box, Link, Spinner, useColorModeValue } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const LoadingLink = ({ href, path, children, ...props }) => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    // Simulate the loading process for 1.5 seconds (adjust as needed)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  const handleLoad = () => {
    setLoading(false) // Set loading to false when the page is fully loaded
  }

  const linkColor = useColorModeValue('black.500', '#ffff')

  return (
    <>
      {loading && (
        <Box
          position="fixed"
          bottom="2rem" // Adjust this value to change the distance from the bottom
          right="2rem" // Adjust this value to change the distance from the right
          zIndex="9999"
        >
          <Spinner color={linkColor} size="md" />{' '}
          {/* Use the linkColor variable */}
        </Box>
      )}
      <NextLink href={href} passHref scroll={false}>
        <Link
          color={path === href ? '#a6bbce' : linkColor}
          target="_blank"
          fontSize="12"
          onClick={handleClick}
          onLoad={handleLoad}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // This script listens for the page load event and hides the spinner
            window.addEventListener("load", function() {
              document.getElementById("loading-spinner").style.display = "none";
            });
          `
        }}
      />
    </>
  )
}

export default LoadingLink
