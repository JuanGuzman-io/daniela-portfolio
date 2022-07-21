import { Box, Heading, Container, Text, Stack, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Hero = ({ data, cv }) => {
    return (
        <Flex
            w={'full'}
            h={'calc(100vh - 3.5rem)'}
            backgroundImage={'/hero.webp'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Container maxW={'3xl'} minH={'100%'} as='section' id='hero'>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                        color={'black'}
                    >
                        {data?.heroTitle1}
                    </Heading>
                    <Text color={'blue.900'} fontWeight={'bold'}>
                        {data?.heroTitle2}
                    </Text>
                    <Stack
                        justifyContent={'center'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        spacing={10}
                    >
                        <Link href={`${cv?.cvURL}?dl=`}>
                            <button
                                className='cv'
                            >Get CV</button>
                        </Link>
                        <img
                            src={urlFor(data?.image1)}
                            alt="Daniela Gómez"
                            className='avatar'
                        />
                    </Stack>
                </Stack>
            </Container >
        </Flex>
    );
}

export default Hero;