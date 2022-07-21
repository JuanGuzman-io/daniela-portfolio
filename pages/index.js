import { AboutMe, Contact, Education, Hero, Metatags, Works } from '../components';
import { motion, useScroll } from "framer-motion"
import { client } from '../lib/client';
import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export const getServerSideProps = async () => {
  const dataQuery = '*[_type == "data"]';
  const dataResponse = await client.fetch(dataQuery);
  const cvQuery = '*[_type == "data"] { "cvURL": cv.asset->url }';
  const cvResponse = await client.fetch(cvQuery);
  const educationQuery = '*[_type == "education"] | order(startDate)';
  const educationResponse = await client.fetch(educationQuery);
  const workQuery = '*[_type == "worksProjects"]';
  const workResponse = await client.fetch(workQuery);

  return {
    props: {
      dataResponse,
      cvResponse,
      educationResponse,
      workResponse
    }
  }
}

export default function Home({ dataResponse, cvResponse, educationResponse, workResponse }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Metatags />
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <main>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -40, opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "tween",
          }}
        >
          <Hero data={dataResponse?.length && dataResponse[0]} cv={cvResponse?.length && cvResponse[0]} />
        </motion.div>

        <AboutMe data={dataResponse?.length && dataResponse[0]} />

        <Container maxW={'container.lg'} minH={'calc(100vh + 3.5rem)'} py={6} as={'section'} id={'education'}>
          <Stack
            spacing={'1.5rem'}
          >
            <Heading mt={'3.5rem'}>Education</Heading>
            <div className="div"></div>
            <Text color={'gray.600'} fontSize={'xl'}>
              {dataResponse?.length && dataResponse[0]?.educationDesc}
            </Text>
          </Stack>
          <Container maxW={'100%'} mt={10}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
              {
                educationResponse?.map(item => (
                  <Education key={item._id} data={item} />
                ))
              }

            </SimpleGrid>
          </Container>
        </Container>

        <Box
          w={'full'}
          minH={'calc(100vh + 3.5rem)'}
          backgroundColor={'white'}
          m={0}
        >
          <Container maxW={'container.lg'} py={6} as={'section'} id={'works'}>
            <Stack
              spacing={'1.5rem'}
            >
              <Heading mt={'3.5rem'}>Works/Projects</Heading>
              <div className="div"></div>
              <Text color={'gray.600'} fontSize={'xl'}>
                {dataResponse?.length && dataResponse[0]?.worksDesc}
              </Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={6}>
              {
                workResponse?.map(item => (
                  <Works key={item._id} data={item} />
                ))
              }
            </SimpleGrid>
          </Container>
        </Box >

        <Contact />
      </main>
    </>
  )
}
