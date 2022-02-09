import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../navbar"

const Main = ({children,router}) => {
    return (
        <Box as="main" >
            <Head>
                <meta name='viewport' content='width=divice-width, initial-scale=1' />
                <title>Hector Wong - BtnProyect</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container
            pt={14}
            maxW={'container.md'}
            >
                {children}
            </Container>
        </Box>
    )
}

export default Main