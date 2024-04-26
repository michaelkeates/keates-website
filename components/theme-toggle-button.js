import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { IconButton, useColorMode, useColorModeValue, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { GET_REPOSITORY_BY_NAME } from '/lib/queries'; // Import your GraphQL query

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Use Apollo Client's useQuery hook to fetch data
  const { loading: gqlLoading } = useQuery(GET_REPOSITORY_BY_NAME);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return (
    <div style={{ display: 'inline-block' }}>
        <IconButton
          aria-label="Toggle theme"
          bg={useColorModeValue('orange.200', 'whiteAlpha.200')}
          _hover={{
            bg: useColorModeValue('orange.300', 'whiteAlpha.300'),
            transform: 'none', //disable zoom effect on hover
          }}
          css={{ backdropFilter: 'blur(10px)' }}
          padding="10px"
          boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
          color={useColorModeValue('blackAlpha.900', 'whiteAlpha.600')}
          icon={
            loading || gqlLoading ? ( //conditional rendering based on loading state
              <Spinner size="sm" />
            ) : (
              //animate the transition between SunIcon and MoonIcon
              <motion.div
                initial={{ opacity: 0 }} //initial opacity
                animate={{ opacity: 1 }} //animate opacity
                transition={{ duration: 0.2 }} //transition duration
              >
                {useColorModeValue(<MoonIcon />, <SunIcon />)}
              </motion.div>
            )
          }
          onClick={toggleColorMode}
        />
    </div>
  );
};

export default ThemeToggleButton;
