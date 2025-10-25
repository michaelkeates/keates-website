import {
  Container,
  Heading,
  Button,
  Box,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Divider,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import thumbusw from '../public/images/works/usw_logo.png'
import thumbcc from '../public/images/works/cc_logo.png'
import thumbkenfreight from '../public/images/works/hllea.png'
import thumbcityhospice from '../public/images/works/city_hospice.png'
import thumbsapiens from '../public/images/works/sapiens.png'
import wordicon from '../public/images/works/microsoft_word.png'
import excelicon from '../public/images/works/microsoft_excel.png'
import firstaidcymru from '../public/images/works/first_aid_cymru_logo.png'
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
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor={useColorModeValue(
                'whiteAlpha.500',
                'whiteAlpha.200'
              )}
              borderWidth={2}
              borderStyle="solid"
              boxShadow="0px 0px 12px 3px rgba(0,0,0,0.05);"
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
              I am a dedicated, hardworking individual with a robust background
              in all things related to computing and technology. Diligent,
              enthusiastic, and a team player, I possess a passion for learning
              and developing new skills, a strong attention to detail, and
              excellent verbal and written communication abilities. I am
              reliable and constantly seeking new challenges to broaden my
              knowledge and experience, while also enhancing my capacity to
              develop efficient and effective solutions for diverse
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
            Experience
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
                  <Image src={thumbsapiens} width={100} />
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
                    Junior Business Analyst
                  </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Sapiens | Full-Time
                  </Heading>
                </Box>
                <Box display="flex" justifyContent="flex-end" flex="1">
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                    fontSize={9}
                  >
                    SEP 2025 - PRESENT
                  </Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>

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
                  <Image src={thumbsapiens} width={100} />
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
                    Graduate Business Analyst
                  </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Sapiens | Full-Time
                  </Heading>
                </Box>
                <Box display="flex" justifyContent="flex-end" flex="1">
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                    fontSize={9}
                  >
                    APR 2024 - AUG 2025
                  </Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Played a role in the successful go-live of the PPS Mutual New Zealand project, configuring product, supporting digital team & implementing the baseline for complex Premium Calculations using SQL.
                    </li>
                    <li>
                      Created advanced spreadsheets for calculating premiums, tax reinsurance, commissions among others.
                    </li>
                    <li>
                      Awarded a Certificate of Recognition for supporting new joiners and consistently delivering high-quality deliverables under tight deadlines.
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
                    Database Assistant
                  </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    City Hospice | Contract
                  </Heading>
                </Box>
                <Box display="flex" justifyContent="flex-end" flex="1">
                  <Badge
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.000')}
                    color=""
                    fontSize={9}
                  >
                    Aug 2023 - MAR 2024
                  </Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Successfully completed a 6-month contract, demonstrating
                      strong performance and dedication, leading to an extension
                      to 8 months.
                    </li>
                    <li>
                      Analysing data to derive insights and support decision-making processes.
                    </li>
                    <li>
                      Contributed significantly to thorough analysis and meticulous data cleansing, leading to the successful implementation of a new system.
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
                    Remote Creative Strategist & Design Consultant
                  </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Heavy Lift Logistics East Africa Limited | Freelance
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
                    fontSize={9}
                  >
                    Jun 2018 - Mar 2020
                  </Badge>
                </Box>
              </Box>
              <Divider marginTop={3} marginBottom={1} />
              <Box marginTop={3}>
                <Box textAlign="left" fontSize={12} padding={2}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Designed and produced company logo, capturing brand identity and values.
                    </li>
                    <li>
                      Created compelling and engaging presentations for clients, effectively conveying complex ideas and proposals.
                    </li>
                    <li>
                      Produced comprehensive and efficient transport plans, optimizing logisistics and ensuring smooth operations.
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
                    BSc (Hons) Applied Computing - First Class Honours
                  </Heading>
                </NextLink>
                <Heading
                  as="h2"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize={11}
                  textAlign="left"
                >
                  University of South Wales
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
                  fontSize={9}
                >
                  Sep 2022 - May 2023
                </Badge>
              </Box>
            </Box>
            <Divider marginTop={3} marginBottom={1} />
            <Box marginTop={3}>
              <Box textAlign="left" fontSize={12} padding={2}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>
                    Designed and developed a Full Stack solution using Next.JS &
                    Typescript, delivering an educational web service and
                    seamless access to an operating system via web browsers,
                    with a specialized emphasis on mobile and tablet
                    compatibility.
                  </li>
                  <li>
                    Proficient in interpreting and analysing complex data to create informative and visually appearing maps using GIS Technologies including cleaning and preparation of a 'Airports of the World' dataset linked using Wikipedia API to show picture and details of the airport.
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
                <Image src={thumbusw} width={100} />
              </Box>
              <Box marginRight={4}>
                <NextLink
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
                    Higher National Diploma (HND) Computing - Distinction
                  </Heading>
                </NextLink>
                <Heading
                  as="h2"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize={11}
                  textAlign="left"
                >
                  University of South Wales
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
                  fontSize={9}
                >
                  Sep 2020 - May 2022
                </Badge>
              </Box>
            </Box>
            <Divider marginTop={3} marginBottom={1} />
            <Box marginTop={3}>
              <Box textAlign="left" fontSize={12} padding={2}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>
                    Designed and developed a Crime Alert App for Android/iOS
                    using Xamarin, providing real-time crime data visualization
                    on a map.
                  </li>
                </ul>
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
                  <Image src={thumbcc} width={70} />
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
                      Business & Technology Education Council (BTEC) Computing - Distinction
                    </Heading>
                  </NextLink>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    Coleg Gwent
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
                    fontSize={9}
                  >
                    Sep 2019 - May 2020
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
              Frameworks
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
                title="Xamarin"
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
              >
                <XamarinIcon />
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
              Databases
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
        <Heading
          as="h3"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize={20}
          mb={4}
          marginTop="1rem"
        >
          Certificates
        </Heading>
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
                  <Image src={firstaidcymru} width={70} />
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
                      Emergency First Aid At Work
                    </Heading>
                  <Heading
                    as="h2"
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize={11}
                    textAlign="left"
                  >
                    First Aid Cymru
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
                    fontSize={9}
                  >
                    Jul 2025 - Jul 2028
                  </Badge>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </div>
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
            </Section>
          </div>
          <Section delay={0.2}>
            {/*<Heading
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
            </SimpleGrid>*/}
            <div className="custom-grid">
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
