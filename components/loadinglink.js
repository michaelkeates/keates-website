import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { Link, Spinner, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const LoadingLink = ({ href, path, children, ...props }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setLoading(true)
  }

  useEffect(() => {
    const handleRouteComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete)
    }
  }, [router])

  const linkColor = useColorModeValue('black.500', '#ffff')

  return (
    <>
      <NextLink href={href} passHref scroll={false}>
        <Link
          color={linkColor}
          target="_blank"
          fontSize="12"
          onClick={handleClick}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
      {loading && (
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            zIndex: 9999
          }}
        >
          <Spinner />
        </div>
      )}
    </>
  )
}

export default LoadingLink
