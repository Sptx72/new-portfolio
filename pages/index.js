import { Container,Box,Heading } from "@chakra-ui/react";

const Page = () =>{
    return(
        <Container>
            <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
                Hello, I`m Marco; a full-stack developer based in Spain!
            </Box>
            <Box display={{md:'flex'}}>
            </Box>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Marco Andres
                </Heading>
                <p>Digital Craftzman ( Artist / Developer / Designer )</p>
            </Box>
        </Container>
    );
}

export default Page;