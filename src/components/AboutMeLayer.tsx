import {
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Image,
  Box
} from '@chakra-ui/react';
import alanAbout from '../assets/img/alanAbout.jpeg'


const AboutMeLayer = () => {
  return (
    <Container
    id="about-me"
    maxW="100vw"
    height="100vh"
    p={{ base: 5, md: 10 }}
    mx="auto"
    color="white"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={2}
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <VStack 
        gap={1} 
        alignItems={{ base: "center", md: "flex-start" }} 
        textAlign={{ base: "center", md: "left" }} 
        maxW="500px"
        mr={200} 
      >
        <Text fontSize="sm">Alan Javier Cañellas 🦉</Text>
        <Heading fontSize={{ base: "2.5rem", sm: "3rem" }}>
          Software Engineer
          <br /> Based in <br /> Buenos Aires, Argentina
        </Heading>
        <Text>
          Hola! Soy Alan (como ya habrás visto en reiteradas ocasiones alrededor de este portfolio). En las siguientes diapositivas te cuento un poco sobre mí y mi día a dia :)
        </Text>
      </VStack>
      <Box>
        <Image 
          src={alanAbout} 
          alt="Alan Javier Cañellas" 
          borderRadius="md" 
          boxSize={{ base: "90%", md: "350px" }} 
          ml={0} 
        />
      </Box>
    </Flex>
  </Container>
);
};

export default AboutMeLayer;