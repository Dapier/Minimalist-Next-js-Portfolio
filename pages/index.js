import { 
    Container,
    Box, 
    Heading, 
    Image, 
    Button,
    useColorModeValue, 
    Link} from "@chakra-ui/react"
import profileImg from '../components/assets/dapier.jpg'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from "../components/layouts/article"

import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"

const Page = () =>{
    return (
    <Layout>

        <Container>
            <Box  borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}  p={3} mb={6} textAlign='center'>
                Hi, I&apos;m a Front-End Developer
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Josue Alvarado
                    </Heading>
                    <p>Web Developer/ Front-End Dev/ Designer UI </p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base:4,md:0}} 
                ml={{md:6}}
                align='center'
                >
                    <Image
                    borderColor='whiteAlpha.800' 
                    borderWidth={2} 
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/assets/dapier.jpg"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Hi, im Front End Jr, im been working on severeal apps and landing pages on startup
                    Currently im work on my blog {' '}
                    <NextLink href="/works/blog">
                        <Link>
                            Kannbalcat
                        </Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Monterrey, Mexico
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Whatever
                </BioSection>
                <BioSection>
                    <BioYear>2020 - Present</BioYear>
                    Passant on Start Up on my university
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    My favorites tech
                </Heading>
                <Paragraph>
                    ReactJs, NextJs, Angular
                    
                </Paragraph>
            </Section>

        </Container>
        </Layout>

    )
}

export default Page