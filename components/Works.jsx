import { Text, Box, Heading, Button, Flex, } from "@chakra-ui/react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Works = ({ data }) => {
    return (
        <Box
            maxW={'445px'}
            height={'fit-content'}
            borderWidth={'0.0625rem'}
            borderRadius={4}
        >
            <Box
                backgroundImage={`url(${urlFor(data?.image)})`}
                width={"full"}
                margin={"0 auto"}
                height={"26vh"}
                mb={4}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
            />
            <Box
                px={4}
                pb={4}
            >
                <Heading
                    size={'md'}
                >
                    {data?.title}
                </Heading>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}
                    pb={4}
                >
                    {data?.type}
                </Text>
                <Text>{data?.workProjectDesc}</Text>
                {
                    data?.more && (
                        <Flex
                            py={4}
                            justifyContent={'flex-end'}
                        >
                            <Link href={data?.more}>
                                <Button
                                    colorScheme={'blue'}
                                    variant={'link'}
                                >
                                    View More
                                </Button>
                            </Link>
                        </Flex>
                    )
                }
            </Box>
        </Box>
    );
}

export default Works;