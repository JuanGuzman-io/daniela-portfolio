import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, VStack, useToast } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export const ContactForm = () => {
    const form = useRef();
    const toast = useToast();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m02zz6c', 'template_jc2ipse', form.current, 'DbAqCzbmKrcgHjVc5')
            .then((result) => {
                console.log(result.text);
                toast({
                    title: 'Message sent.',
                    description: "The message was sent successfully.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                setUserName('');
                setUserEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                toast({
                    title: 'Something gone wrong.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} >
            <VStack spacing={5}>
                <FormControl id="user_name">
                    <FormLabel htmlFor='user_name'>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" size="md" placeholder='John Doe' name='user_name' value={userName} onChange={e => setUserName(e.target.value)} isRequired />
                    </InputGroup>
                </FormControl>
                <FormControl id="user_email">
                    <FormLabel htmlFor='user_email'>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineMail color="gray.800" />}
                        />
                        <Input type="email" size="md" placeholder='example@email.com' name='user_email' value={userEmail} onChange={e => setUserEmail(e.target.value)} isRequired />
                    </InputGroup>
                </FormControl>
                <FormControl id="message">
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder="Message"
                        name='message'
                        isRequired
                        minLength={'10'}
                        value={message} onChange={e => setMessage(e.target.value)}
                    />
                </FormControl>
                <FormControl id="name" float="right">
                    <Button
                        variant="solid"
                        color="white"
                        colorScheme={'blue'}
                        type='submit'
                    >
                        Send Message
                    </Button>
                </FormControl>
            </VStack>
        </form>
    );
};