import { Container, Box, Heading, VStack, HStack, Wrap, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { BsLinkedin, BsWhatsapp, BsTelephone } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { ContactForm } from './ContactForm';

const Contact = () => {
    return (
        <Container maxW={'container.lg'} minH={'calc(100vh +- 3.5rem)'} py={6} as={'section'} id={'contact'}>
            <Stack
                spacing={'1.5rem'}
            >
                <Heading mt={'3.5rem'}>Contact</Heading>
                <div className="div"></div>
            </Stack>
            <Box
                borderRadius="lg"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}
            >
                <Box p={4}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                        <Box>
                            <Box py={{ base: 4, sm: 3, md: 8, lg: 10 }}>
                                <VStack pl={0} spacing={3} alignItems="flex-start">
                                    <VStack pl={0} spacing={3} alignItems="flex-start">
                                        <Link href={'tel: +57 321 6392126'}>
                                            <button
                                                className='btn-contact'
                                            >
                                                <BsTelephone size={'20px'} />
                                                +57 321 6392126
                                            </button>
                                        </Link>
                                        <button
                                            className='btn-contact'
                                        >
                                            <HiOutlineMail size={'20px'} />
                                            danielagomezayalde@gmail.com
                                        </button>
                                        <button
                                            className='btn-contact'
                                        >
                                            <HiOutlineLocationMarker size={'20px'} />
                                            Cali, Colombia
                                        </button>
                                    </VStack>
                                </VStack>
                            </Box>
                            <HStack
                                mt={{ lg: 10, md: 10 }}
                                spacing={5}
                                px={5}
                                alignItems="flex-start"
                            >
                                <Link href={'https://www.linkedin.com/in/daniela-g%C3%B3mez-a8641420b'}>
                                    <button
                                        className='btn-contact-social linkedin'
                                    >
                                        <BsLinkedin size="28px" />
                                    </button>
                                </Link>
                                <Link href={'https://api.whatsapp.com/send?phone=573216392126'}>
                                    <button
                                        className='btn-contact-social whatsapp'
                                    >
                                        <BsWhatsapp size="28px" />
                                    </button>
                                </Link>
                            </HStack>
                        </Box>
                        <Box bg="white" borderRadius="lg">
                            <Box m={8} color="#0B0E3F" py={6}>
                                <ContactForm />
                            </Box>
                        </Box>
                    </Wrap>
                </Box>
            </Box>
            <Stack
                spacing={'1.875rem'}
                py={10}
            >


            </Stack>
        </Container >
    );
}

export default Contact;