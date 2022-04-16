import {
    Container,
    Box,
    Heading,
    SimpleGrid,
    Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"
//Works screenshot
import thumbnail from '../components/assets/landingPage.png'
import ecommerceThumbnail from '../components/assets/ecommerce.png'

const Works= () =>{
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works        
            </Heading>
            <SimpleGrid columns={[1,1,1]} gap={6}>
                <Section>
                    <WorkGridItem
                    id="kann"
                    title={"Landing Page "}
                    thumbnail={thumbnail}
                    >
                        Landing page using NextJs & styled components
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem
                    id="e-commerceBerny"
                    title={"Ecommerce Berny"}
                    thumbnail={ecommerceThumbnail}
                    >
                        Pharmacy e-Commerce using ReactJS , Firebase, 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works