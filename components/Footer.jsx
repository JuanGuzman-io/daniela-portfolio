import { Box, chakra, Container, Flex, Image, Link, Stack, Text, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Logo = (props) => {
    return (
        <Image
            src='/logo_large.webp'
            alt='Daniela Gómez'
            width={200}
            height={'100%'}
        />
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallCentered() {
    return (
        <Box
            bg={useColorModeValue('white.50', 'white.900')}
            color={useColorModeValue('white.700', 'white.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={6}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Logo />
                <Text fontWeight={'black'} color={'blue.700'}>Mechatronics Engineer</Text>
                <Flex gap={6} flexWrap={'wrap'} justifyContent={'center'}>
                    <Link href={'#hero'}>Presentation</Link>
                    <Link href={'#aboutme'}>About Me</Link>
                    <Link href={'#education'}>Education</Link>
                    <Link href={'#works'}>Works/Projects</Link>
                    <Link href={'#contact'}>Contact</Link>
                </Flex>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                py={2}
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Daniela Gómez. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'https://www.linkedin.com/in/daniela-g%C3%B3mez-a8641420b'}>
                            <BsLinkedin />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'https://api.whatsapp.com/send?phone=573216392126'}>
                            <BsWhatsapp />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box >
    );
}