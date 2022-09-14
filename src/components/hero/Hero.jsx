import {
  Button,
  Container,
  Flex,
  Heading,
  Img,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Image from "../../assets/image/model.png";
import { FiPhone, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <Container maxW="100vw" my={4} alignItems="center">
        <Flex
          height={["auto", "auto", "90vh", "90vh"]}
          align="center"
          gap={4}
          flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        >
          <VStack
            w={["100vw", "100vw", "65vw", "50vw"]}
            // display={["none", "none", "flex", "flex"]}
          >
            <Img
              boxSize={["600px", "700px", "700px", "700px"]}
              src={Image}
              objectFit="cover"
            ></Img>
          </VStack>
          <VStack
            textShadow="0 0 10px gray"
            w={["100vw", "100vw", "70vw", "70vw"]}
            marginTop={["-40vh", "-40vh", "0", "0"]}
            gap={4}
          >
            <Heading
              // align={["center", "center", "auto", "auto"]}
              align="center"
              as="h1"
              // size="4xl"
              fontSize={["2em", "5em", "3em", "4em"]}
            >
              Hi! I Am <br />
              <Heading as="span" fontSize={"1.5em"} color="green.400">
                Ankit Bhusal
              </Heading>
            </Heading>
            <WrapItem
              //   alignSelf="flex-start"
              flexWrap={"wrap"}
              gap={4}
              // alignSelf={["center", "center", "flex-start", "flex-start"]}
              alignSelf="center"
              justifyContent="center"
            >
              <Button size="lg" gap={2}>
                <FiPhone />
                Contact Me
              </Button>
              <Button size="lg" gap={2}>
                <FiDownload />
                Download CV
              </Button>
            </WrapItem>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
