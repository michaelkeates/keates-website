import {
  Container,
  Heading,
  Button,
  Box,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Divider,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Image from 'next/image'
import thumbusw from '../public/images/works/usw_logo.png'
import thumbcc from '../public/images/works/cc_logo.png'
import React, { useState } from 'react'
import styles from '../styles/emoji.module.css'

import {
  CplusplusIcon,
  CsharpIcon,
  Css3Icon,
  DockerIcon,
  Html5Icon,
  JavascriptIcon,
  GraphQlIcon,
  KotlinIcon,
  MySQLIcon,
  PhpIcon,
  NextjsIcon,
  PostgresqlIcon,
  PythonIcon,
  ReactIcon,
  ThreejsIcon,
  TypescriptIcon,
  XamarinIcon,
  OracleIcon,
  JQueryIcon
} from '../components/devicons'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  function handleOpenInNewTab() {
    const fileUrl = '/cv.pdf'
    window.open(fileUrl, '_blank')
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
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
            Check out my qualifications and skills!
            <span className={styles.emojiTitle} style={{ marginLeft: '8px' }}>
              🧍
            </span>
          </a>
        </Box>

        <Box display={{ md: 'flex' }} paddingTop="25px">
          <Box flexGrow={1}>
            <Heading
              as="h2"
              variant="page-title"
              fontFamily="Roboto"
              fontWeight=""
            >
              Michael Keates
            </Heading>
            <div className="custom-grid">
              <p>Software Developer</p>
            </div>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/mike.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
        <SimpleGrid colums={[1, 1, 2]} gap={2}>
          <Section delay={0.1}>
            <Heading
              as="h3"
              fontFamily="Roboto"
              fontWeight="500"
              fontSize={20}
              mb={2}
            >
              Background
            </Heading>
            <Paragraph>
              I am a dedicated and hardworking individual with a strong
              background in all things computing and technology. I have a
              passion for learning and developing new skills, a strong attention
              to detail and I am always looking for new opportunities to expand
              my knowledge and experience as well as honing my ability to create
              efficient and effective solutions for various requirements.
            </Paragraph>
          </Section>
        </SimpleGrid>
        <Divider />
        <Heading
          as="h3"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize={20}
          mb={2}
          marginTop="1rem"
        >
          Contact
        </Heading>
        <div className={styles.hackymargin}>
          <SimpleGrid columns={[2, 1, 2]} gap={2}>
            <Section delay={0.3}>
              <Box
                borderRadius="lg"
                mb={1}
                p={1}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                padding="10px;"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <BioSection>
                  <a
                    href="https://www.michaelkeates.co.uk"
                    className={styles.emailLink}
                  >
                    <span className={styles.emoji}>👉🏼</span>{' '}
                    www.michaelkeates.co.uk
                  </a>
                </BioSection>
              </Box>
            </Section>
            <Section delay={0.3}>
              <Box
                borderRadius="lg"
                mb={1}
                p={1}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                padding="10px;"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <BioSection>
                  <a
                    href="https://github.com/michaelkeates"
                    className={styles.emailLink}
                  >
                    <span className={styles.emoji}>🚀</span>{' '}
                    github.com/michaelkeates
                  </a>
                </BioSection>
              </Box>
            </Section>
            <Section delay={0.3}>
              <Box
                borderRadius="lg"
                mb={1}
                p={1}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                padding="10px;"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <BioSection>
                  <a
                    href="mailto:mail@michaelkeates.co.uk"
                    className={styles.emailLink}
                  >
                    <span className={styles.emoji}>✉️</span>{' '}
                    mail@michaelkeates.co.uk
                  </a>
                </BioSection>
              </Box>
            </Section>
            <Section delay={0.3}>
              <Box
                borderRadius="lg"
                mb={1}
                p={1}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                padding="10px;"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <BioSection>
                  <a href="tel:+447495137974" className={styles.emailLink}>
                    <span className={styles.emoji}>📱</span> +44 7495 137 974
                  </a>
                </BioSection>
              </Box>
            </Section>
          </SimpleGrid>
        </div>
        <Divider />
        <Heading
          as="h3"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize={20}
          mb={4}
          marginTop="1rem"
        >
          Education
        </Heading>

        <SimpleGrid columns={[3, 2, 3]} gap={2}>
          <Section delay={0.3}>
            <Box
              borderRadius="lg"
              mb={0}
              p={4}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <WorkGridItem
                id="uswapplied"
                thumbnail={thumbusw}
                title="BSc (Hons) Applied Computing"
              >
                University of South Wales (2022-2023)
              </WorkGridItem>
            </Box>
          </Section>
          <Section delay={0.3}>
            <Box
              borderRadius="lg"
              mb={0}
              p={4}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <WorkGridItem
                id="uswhnd"
                thumbnail={thumbusw}
                title="HND Computing"
              >
                University of South Wales (2020-2022)
              </WorkGridItem>
            </Box>
          </Section>
          <Section delay={0.3}>
            <Box
              borderRadius="lg"
              mb={6}
              p={4}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <WorkGridItem
                id="coleggwentbtec"
                thumbnail={thumbcc}
                title="BTEC Computing"
              >
                Coleg Gwent (2019-2020)
              </WorkGridItem>
            </Box>
          </Section>
        </SimpleGrid>
        <Divider />
        <Section delay={0.2}>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={4}
            marginTop="1rem"
          >
            Programming
          </Heading>
          <SimpleGrid columns={[4, 4, 7]} gap={1} fontSize="12px;">
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="C++"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <CplusplusIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="C#"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <CsharpIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="CSS3"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <Css3Icon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="HTML5"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <Html5Icon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="JavaScript"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <JavascriptIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="JQuery"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <JQueryIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="PHP"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <PhpIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              href="Kotlin"
              title="Kotlin"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <KotlinIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              href="Typescript"
              title="Python"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <PythonIcon />
            </Box>
          </SimpleGrid>
        </Section>
        <Divider />
        <Section delay={0.2}>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={4}
            marginTop="1rem"
          >
            Platforms
          </Heading>
          <SimpleGrid columns={[4, 4, 7]} gap={1} fontSize="12px;">
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="Typescript"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <TypescriptIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="React"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <ReactIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="Next.js"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <NextjsIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="GraphQL"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <GraphQlIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="mySQL"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <MySQLIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="PostgreSQL"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <PostgresqlIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              href="Typescript"
              title="PL/SQL"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <OracleIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              href="Typescript"
              title="Docker"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <DockerIcon />
            </Box>
          </SimpleGrid>
        </Section>
        <Divider />
        <Section delay={0.2}>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={4}
            marginTop="1rem"
          >
            Other Skills
          </Heading>
          <SimpleGrid columns={[4, 4, 7]} gap={1} fontSize="12px;">
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="Three.js"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <ThreejsIcon />
            </Box>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding="10px;"
              title="Xamarin"
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
            >
              <XamarinIcon />
            </Box>
          </SimpleGrid>
        </Section>
        <div className="custom-grid">
          <Divider />
          <Section delay={0.2}>
            <Heading
              as="h3"
              fontFamily="Roboto"
              fontWeight="500"
              fontSize={20}
              mb={4}
              marginTop="1rem"
            >
              Interests
            </Heading>
            <SimpleGrid columns={[2, 1, 2]} gap={2}>
              <Section delay={0.3}>
                <Box
                  borderRadius="lg"
                  mb={1}
                  p={1}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                  padding="10px;"
                  boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                >
                  <BioSection>
                    <a className={styles.emailLink}>
                      <span className={styles.emoji}>👨🏾‍💻</span> Coding
                    </a>
                  </BioSection>
                </Box>
              </Section>
              <Section delay={0.3}>
                <Box
                  borderRadius="lg"
                  mb={1}
                  p={1}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                  padding="10px;"
                  boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                >
                  <BioSection>
                    <a className={styles.emailLink}>
                      <span className={styles.emoji}>📷</span> Photography
                    </a>
                  </BioSection>
                </Box>
              </Section>
              <Section delay={0.3}>
                <Box
                  borderRadius="lg"
                  mb={1}
                  p={1}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                  padding="10px;"
                  boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                >
                  <BioSection>
                    <a className={styles.emailLink}>
                      <span className={styles.emoji}>🧳</span> Travelling
                    </a>
                  </BioSection>
                </Box>
              </Section>
              <Section delay={0.3}>
                <Box
                  borderRadius="lg"
                  mb={1}
                  p={1}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                  padding="10px;"
                  boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                >
                  <BioSection>
                    <a className={styles.emailLink}>
                      <span className={styles.emoji}>💪</span> Gym
                    </a>
                  </BioSection>
                </Box>
              </Section>
            </SimpleGrid>
            <Divider />
            <SimpleGrid colums={[1, 1, 1]} gap={2} marginTop="1rem">
              <Section delay={0.1}>
                <Box textAlign="center" fontSize={12}>
                  View the most up to date version of my CV!
                </Box>
                <Box borderRadius="lg" textAlign="center">
                  <Button
                    onClick={handleOpenInNewTab}
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    _hover={{
                      bg: useColorModeValue('#ffffff', '#828282')
                    }}
                    marginTop="1.2rem"
                    textAlign={'center'}
                    rightIcon={<ChevronRightIcon />}
                  >
                    View CV
                  </Button>
                </Box>
              </Section>
            </SimpleGrid>
          </Section>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
