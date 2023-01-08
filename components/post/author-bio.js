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
    <Box
      flexShrink={0}
      align="center"
    >
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
        I am a organised and highly creative individual that thrives on working
        at the utmost level of professionalism. I will always work to the best
        of my abilities under any sort of circumstances and under any level of
        pressure for something that I truly love. I have a strong attention to
        detail and possess the ability to adapt to situations quickly,
        efficently and creatively. Click <Link href="/about">here</Link> if you
        would like to know more.
      </Paragraph>
    </Section>
  </Section>
)

export default AuthorBio
