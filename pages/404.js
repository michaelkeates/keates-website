import NextLink from 'next/link'
import Section from '../components/section'
import {
  Box,
  Text,
  Container,
  Divider,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import styles from '../styles/emoji.module.css'

const NotFound = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          padding="10px"
          boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
        >
          <a className={styles.emailTitleLink}>
            Sorry!
            <span className={styles.emojiTitle} style={{ marginLeft: '8px' }}>
              🤦‍♂️
            </span>
          </a>
        </Box>
        <Text align="center" paddingTop="7px">
          The page you&apos;re looking for was not found.
        </Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
              Return to home
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default NotFound
