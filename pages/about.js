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
import thumbkenfreight from '../public/images/works/hllea.png'
import thumbcityhospice from '../public/images/works/city_hospice.png'
import wordicon from '../public/images/works/microsoft_word.png'
import excelicon from '../public/images/works/microsoft_excel.png'
import React, { useState } from 'react'
import styles from '../styles/emoji.module.css'
import Bubble from '../components/bubbleheader'
import NextLink from 'next/link'
import LoadingLink from '../components/loadinglink'

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
  GithubIcon,
  DotNetIcon
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
              <p>Recent Graduate Software Developer</p>
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
              I am a recent graduate and a dedicated, hardworking individual
              with a robust background in all things related to computing and
              technology. I possess a passion for learning and developing new
              skills, a strong attention to detail, excellent verbal and written
              communication abilities. I am constantly seeking new challenges to
              broaden my knowledge and experience, while also enhancing my
              capacity to develop efficient and effective solutions for diverse
              requirements.
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
          <Section delay={0.1}>
            <SimpleGrid columns={[1, 1, 2]} gap={2}>
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
                    <span className={styles.emoji}>🏠</span> Newport, South
                    Wales
                  </a>
                </BioSection>
              </Box>
            </SimpleGrid>
          </Section>
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
            Work
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
                  <Image src={thumbcityhospice} width={100} />
                </Box>
                <Box marginRight={4}>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="600"
                    fontSize={13}
                    textAlign="left"
                    marginBottom="2px"
                  >
                    City Hospice
                  </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Database Assistant
                  </Heading>
                </Box>
                <Box
                  marginTop="-5px"
                  display="flex"
                  justifyContent="flex-end"
                  flex="1"
                >
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                  >
                    2023 - Present
                  </Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Analysing data & assisting with transfering data to new
                      server
                    </li>
                    <li>
                      Developing software to assist and speed up analysis of
                      data
                    </li>
                  </ul>
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
                  <Image src={thumbkenfreight} width={100} />
                </Box>
                <Box marginRight={4}>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="600"
                    fontSize={13}
                    textAlign="left"
                    marginBottom="2px"
                  >
                    Heavy Lift Logistics East Africa Limited
                  </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Remote Creative Strategist & Design Consultant
                  </Heading>
                </Box>
                <Box
                  marginTop="-5px"
                  display="flex"
                  justifyContent="flex-end"
                  flex="1"
                >
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                  >
                    2018 - 2020
                  </Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Designed and produced company logo, capturing brand
                      identity and values
                    </li>
                    <li>
                      Created compelling and engaging presentations for clients,
                      effectively conveying complex ideas and proposal
                    </li>
                    <li>
                      Produced comprehensive and efficient transport plans,
                      optimizing logisistics and ensuring smooth operations
                    </li>
                    <li>
                      Worked remotely to manage projects, collaborating with
                      clients to achieve project goals
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
                <LoadingLink
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
                </LoadingLink>
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
                <Badge
                  bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                  color=""
                >
                  2022 - 2023
                </Badge>
              </Box>
            </Box>
            <Divider marginTop={3} marginBottom={1} />
            <Box marginTop={3}>
              <Box textAlign="left" fontSize={12} padding={2}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>
                    Proficient in interpreting and analysing complex data to
                    create informative and visually appearing maps using GIS
                    Technologies
                  </li>
                  <li>
                    Strong understanding of database modeling principles,
                    enabling effective data organization and manipulation for
                    various applications
                  </li>
                  <li>
                    Developed a holistic understanding of industry expectations
                    and best practices
                  </li>
                </ul>
                <Divider marginTop={3} marginBottom={3} />
                <div>
                  Relevant Modules - Advanced Internet & Computing, Advanced
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
                <LoadingLink
                  href="qualificatons/uswhnd"
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
                </LoadingLink>
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
                <Badge
                  bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                  color=""
                >
                  2020 - 2022
                </Badge>
              </Box>
            </Box>
            <Divider marginTop={3} marginBottom={1} />
            <Box marginTop={3}>
              <Box textAlign="left" fontSize={12} padding={2}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>
                    Proficient in multiple programming languages, with a strong
                    ability to conceptualize, develop, and debug complex code
                  </li>
                  <li>
                    Created responsive and user-friendly websites through
                    mastery of Responsive Web Development principles
                  </li>
                  <li>
                    Developed a solid foundation in Systems Architecture and
                    Modelling, enabling effective design and optimization of
                    software systems
                  </li>
                </ul>
                <Divider marginTop={3} marginBottom={3} />
                <div>
                  Relevant Modules - Information Systems Analysis & Design,
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
                  <LoadingLink
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
                  </LoadingLink>
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
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                  >
                    2019 - 2020
                  </Badge>
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
                title=".NET"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <DotNetIcon />
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

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
