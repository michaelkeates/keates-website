import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, Link, Spinner } from '@chakra-ui/react';

const LoadingLink = ({ href, path, children, ...props }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate the loading process for 1.5 seconds (adjust as needed)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleLoad = () => {
    setLoading(false); // Set loading to false when the page is fully loaded
  };

  return (
    <>
      {loading && (
        <Box
          position="fixed"
          bottom="2rem" // Adjust this value to change the distance from the bottom
          right="2rem" // Adjust this value to change the distance from the right
          zIndex="9999"
        >
          <Spinner color="black.500" size="md" /> {/* Adjust the size with "size" prop */}
        </Box>
      )}
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          color={path === href ? '#a6bbce' : '#000'}
          target="_blank"
          fontSize="12"
          onClick={handleClick}
          onLoad={handleLoad}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    </>
  );
};

export default LoadingLink;