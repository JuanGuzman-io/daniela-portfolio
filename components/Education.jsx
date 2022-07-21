import { Box, Icon, Text, HStack, VStack } from '@chakra-ui/react';
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ data }) => {
    return (
        <HStack align={'top'}>
            <Box color={'#1363DF'} px={2}>
                <Icon as={FaGraduationCap} />
            </Box>
            <VStack align={'start'}>
                <Text fontWeight={600}>{data?.degree}</Text>
                <Text>{data?.school}</Text>
                <Text color={'gray.400'}>{data?.startDate} - {data?.endDate}</Text>
                <Text color={'gray.800'}>{data?.descDegree}</Text>
            </VStack>
        </HStack>
    );
}

export default Education;