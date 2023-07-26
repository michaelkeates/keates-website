import React from 'react'

import NextLink from 'next/link'
//import Image from 'next/image'
import { gql } from '@apollo/client'

import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Divider,
  //  List,
  //  ListItem,
  useColorModeValue,
  chakra,
  Badge,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const AuthorBio = () => (
  <Section>
    <Box flexShrink={0} align="center">
      <ProfileImage
        src="/images/mike.jpg"
        alt="Profile image"
        borderRadius="full"
        width="110"
        height="110"
      />
    </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading
          as="h2"
          variant="page-title"
          fontFamily="Roboto"
          fontWeight=""
          textAlign="center"
        >
          Michael Keates
        </Heading>
      </Box>
    </Box>

    <Section delay={0.1}>
      <Paragraph>
        I am a dedicated and hardworking individual with a strong background in
        all things computing and technology. I have a passion for learning and
        developing new skills, a strong attention to detail, excellent verbal,
        written and communication skills and I am always looking for new
        challenges to expand my knowledge and experience as well as improving my
        abilities to create efficient and effective solutions for various
        requirements.
      </Paragraph>
    </Section>
  </Section>
)

export default AuthorBio
