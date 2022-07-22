import { Box, Button, Container, Image } from "@chakra-ui/react";
import Link from "next/link";

const Custom404 = () => {
    return (
        <Box
            w={'full'}
            minH={'100vh'}
            backgroundColor={'white'}
            m={0}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Image
                src={'/404.gif'}
                width={500}
                height={500}
            />
            <Link href={'/'}>
                <Button
                    colorScheme={'black'}
                    variant={'link'}
                    py={6}
                >Back to secure zone</Button>
            </Link>
        </Box>
    );
}

export default Custom404;