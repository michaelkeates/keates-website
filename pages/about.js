import {
  Container,
  Heading,
  Button,
  Box,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Divider,
  Badge,
  Grid
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
import thumbkenfreight from '../public/images/works/hllea.jpg'
import wordicon from '../public/images/works/microsoft_word.png'
import excelicon from '../public/images/works/microsoft_excel.png'
import React, { useState } from 'react'
import styles from '../styles/emoji.module.css'
import Bubble from '../components/bubbleheader'
import NextLink from 'next/link'

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
  JQueryIcon,
  GitIcon,
  PhotoshopIcon,
  GithubIcon
} from '../components/devicons'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  function handleOpenInNewTab() {
    const fileUrl = '/cv.pdf'
    window.open(fileUrl, '_blank')
  }

  return (
    <Layout>
      <Container>
        <Bubble text="Check out my qualifications and skills!" emoji="🧍" />
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
              to detail, excellent verbal, written and communication skills and
              I am always looking for new challenges to expand my knowledge and
              experience as well as improving my abilities to create efficient
              and effective solutions for various requirements.
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
        <Section delay={0.2}>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={4}
            marginTop="1rem"
          >
            Work Experience
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={2} justifyContent="center">
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding={4}
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
              paddingTop="1rem"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Box marginRight={4} marginTop="-2px" align="center">
                  <Image src={thumbkenfreight} width={100} />
                </Box>
                <Box marginRight={4}>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="600"
                    fontSize={13}
                    textAlign="left"
                  >
                    Heavy Lift Logistics East Africa Limited - Graphic Designer
                    (Remote)
                  </Heading>
                </Box>
                <Box
                  marginTop="-5px"
                  display="flex"
                  justifyContent="flex-end"
                  flex="1"
                >
                  <Badge colorScheme="grey">2018 - 2020</Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Communicated with clients to understand requirements for
                      new sister company
                    </li>
                    <li>
                      Produced accurate transport plans using both Adobe
                      Photopshop & Illustrator
                    </li>
                    <li>Designed the company Logo</li>
                    <li>
                      Increased my confidence and proud of being part of a
                      number of heavy lift projects across East Africa
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Section>
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
        <SimpleGrid columns={[1, 1, 1]} gap={2} justifyContent="center">
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding={4}
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            paddingTop="1rem"
            flexDirection="column"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Box marginRight={4} marginTop="-2px" align="center">
                <Image src={thumbusw} width={100} />
              </Box>
              <Box marginRight={4}>
                <NextLink
                  href="qualificatons/uswapplied"
                  passHref
                  scroll={false}
                >
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="600"
                    fontSize={13}
                    textAlign="left"
                    marginBottom="2px"
                  >
                    University of South Wales
                  </Heading>
                </NextLink>
                <Heading
                  as="h2"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize={11}
                  textAlign="left"
                >
                  First Class Honours - BSc (Hons) Applied Computing
                </Heading>
              </Box>
              <Box
                marginTop="-5px"
                display="flex"
                justifyContent="flex-end"
                flex="1"
              >
                <Badge colorScheme="grey">2022 - 2023</Badge>
              </Box>
            </Box>
            <Divider marginTop={3} marginBottom={1} />
            <Box marginTop={3}>
              <Box textAlign="left" fontSize={12} padding={2}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>
                    Analytical and conceptual thinking, with a consecientious
                    approach to managing workloads.
                  </li>
                  <li>
                    Ability to handle, analyse and interpret large, complex data
                    and processing to be used
                  </li>
                  <li>Advanced problem solving and numeracy skills</li>
                  <li>
                    Developed a Web app that allows individuals to use a
                    Operating System on their browser for Individual Project
                  </li>
                  <li>
                    Offered to do my Phd by professor after recieving a First
                    across all modules
                  </li>
                </ul>
                <Divider marginTop={3} marginBottom={3} />
                <div>
                  Notable Modules - Advanced Internet & Computing, Advanced
                  Databases & Modelling, GIS and the Spatial Web, The Computing
                  Professional in Practice
                </div>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 1]} gap={2} justifyContent="center">
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding={4}
            boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
            paddingTop="1rem"
            flexDirection="column"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Box marginRight={4} marginTop="-2px" align="center">
                <Image src={thumbusw} width={100} />
              </Box>
              <Box marginRight={4}>
                <NextLink href="qualificatons/uswhnd" passHref scroll={false}>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="600"
                    fontSize={13}
                    textAlign="left"
                    marginBottom="2px"
                  >
                    University of South Wales
                  </Heading>
                </NextLink>
                <Heading
                  as="h2"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize={11}
                  textAlign="left"
                >
                  Distinction - Higher National Diploma (HND) Computing
                </Heading>
              </Box>
              <Box
                marginTop="-5px"
                display="flex"
                justifyContent="flex-end"
                flex="1"
              >
                <Badge colorScheme="grey">2020 - 2022</Badge>
              </Box>
            </Box>
            <Divider marginTop={3} marginBottom={1} />
            <Box marginTop={3}>
              <Box textAlign="left" fontSize={12} padding={2}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>
                    Got highest overall grade in recent history
                  </li>
                  <li>Something 2</li>
                  <li>
                    Accomplished communication skills, both written and
                    verbally, developed through essays and presentations
                  </li>
                  <li>
                    Developed a Crime Alert/Tracking Mobile App for both iOS &
                    Android for Individual Project
                  </li>
                </ul>
                <Divider marginTop={3} marginBottom={3} />
                <div>
                  Notable Modules - Information Systems Analysis & Design,
                  Computer Programming, Responsive Web Development, Computer
                  Systems Security, Systems Architecture and Modelling
                </div>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        <div className="another-custom-grid">
          <SimpleGrid columns={[1, 1, 1]} gap={2} justifyContent="center">
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
              padding={4}
              boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05)"
              paddingTop="1rem"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Box marginRight={4} marginTop="-2px" align="center">
                  <Image src={thumbcc} width={100} />
                </Box>
                <Box marginRight={4}>
                  <NextLink
                    href="qualificatons/coleggwentbtec"
                    passHref
                    scroll={false}
                  >
                    <Heading
                      as="h2"
                      fontFamily="Roboto"
                      fontWeight="600"
                      fontSize={13}
                      textAlign="left"
                      marginBottom="2px"
                    >
                      Coleg Gwent
                    </Heading>
                  </NextLink>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Distinction - BTEC Computing
                  </Heading>
                </Box>
                <Box
                  marginTop="-5px"
                  display="flex"
                  justifyContent="flex-end"
                  flex="1"
                >
                  <Badge colorScheme="grey">2019 - 2020</Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Proficiency in all areas of Microsoft Office, including
                      Access, Excel, Word and Powerpoint
                    </li>
                    <li>
                      Reached the semi finals of the AWS Project Competition
                    </li>
                  </ul>
                  <Divider marginTop={3} marginBottom={3} />
                  <div>
                    Notable Modules - Principles of Computer Science,
                    Fundementals of Computer Systems, IT Systems Security &
                    Encryption, Business Applications of Social Media, Computer
                    Games Development, Mobile Apps Development
                  </div>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
          <Divider />
        </div>
        <div className="yet-another-custom-grid">
          <Section delay={0.2}>
            <Heading
              as="h3"
              fontFamily="Roboto"
              fontWeight="500"
              fontSize={20}
              mb={4}
              marginTop="1rem"
            >
              Languages
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
              Frameworks & Databases
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
                href="Typescript"
                title="Git"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <GitIcon />
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
                title="Github"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <GithubIcon />
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
              <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                padding="10px;"
                href="Typescript"
                title="Photoshop"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <PhotoshopIcon />
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
                title="Word"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <Image src={wordicon} width={100} />
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
                title="Excel"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <Image src={excelicon} width={100} />
              </Box>
            </SimpleGrid>
          </Section>
          <Divider />
          <div className="custom-grid">
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
              <SimpleGrid columns={[4, 1, 4]} gap={1}>
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
                        <span className={styles.emoji}>💪</span> Gym
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
                        <span className={styles.emoji}>📝</span> Blogging
                      </a>
                    </BioSection>
                  </Box>
                </Section>
              </SimpleGrid>
              <Divider />
            </Section>
          </div>
          <Section delay={0.2}>
            <Heading
              as="h3"
              fontFamily="Roboto"
              fontWeight="500"
              fontSize={20}
              mb={4}
              marginTop="1rem"
            >
              References
            </Heading>
            <SimpleGrid colums={[1, 1, 2]} gap={2}>
              <Section delay={0.1}>
                <Paragraph>References are available on request.</Paragraph>
              </Section>
            </SimpleGrid>
            <Divider />
            <div className="custom-grid">
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
            </div>
          </Section>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
