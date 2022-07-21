import { Box, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { urlFor } from "../lib/client";

const AboutMe = ({ data }) => {
    return (
        <Box
            w={'full'}
            minH={'calc(100vh - 3.5rem)'}
            backgroundColor={'white'}
            m={0}
        >
            <Container maxW={'container.lg'} height={'100%'} as={'section'} id={'aboutme'}>
                <div className='edu-container'>
                    <div className='education'>
                        <Image
                            src={urlFor(data?.image2)}
                            alt={'Daniela'}
                            className='img'
                        />
                    </div>
                    <Stack
                        spacing={'1.5rem'}
                    >
                        <Heading>About Me</Heading>
                        <div className="div"></div>
                        <Text textColor={'#1363DF'} fontWeight={'bold'}>{data?.aboutDesc1}</Text>
                        <Text>{data?.aboutDesc2}</Text>
                    </Stack>
                </div>
            </Container>
        </Box>
    );
}

export default AboutMe;