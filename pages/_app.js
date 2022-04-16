import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'

//Page transition
import {AnimatePresence} from 'framer-motion'

function Portfolio ({Component, pageProps, router}) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
export default Portfolio
