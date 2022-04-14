import { Container,Box, Heading } from "@chakra-ui/react"
const Page = () =>{
    return (
        <Container>
            <Box borderRadius="lg"  p={3} mb={6} textAlign='center'>
                Hi, I&apos;m a Front-End Developer
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Josue Alvarado
                    </Heading>
                    <p>Web Developer/ Front-End Dev/ Designer UI </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page