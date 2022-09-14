import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";
import { CgWebsite } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { DiPhotoshop } from "react-icons/di";
import { FiDownload } from "react-icons/fi";

const Services = () => {
  return (
    <>
      <Container my="10rem" maxW="100%">
        <Flex
          align="center"
          flexWrap={["wrap-reverse", "wrap-reverse", "nowrap", "nowrap"]}
          gap="2rem"
          mx={["0", "0", "5vw", "10vw"]}
        >
          <Stack width={"100vw"}>
            <ServiceCard name="Website Development" icon={<CgWebsite />} />
            <Spacer />
            <ServiceCard name="Ui/Ux Design" icon={<FiFigma />} />
            <Spacer />

            <ServiceCard name="Graphics Design" icon={<DiPhotoshop />} />
          </Stack>

          <VStack>
            <Heading
              as="h1"
              size="4xl"
              textAlign={["center", "center", "start", "start"]}
            >
              My awesome{" "}
              <Text as="span" color="green.400">
                services
              </Text>
            </Heading>

            <Box alignSelf="flex-start" py={4} textAlign="justify">
              <Text py={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                laudantium ab molestiae soluta aut dignissimos?
              </Text>
              <Text py={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                laudantium ab molestiae, soluta aut dignissimos? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ipsum dicta facere
                eos neque consequatur. Alias, quibusdam nobis repellat minima,
                tenetur voluptas, aliquid eos expedita earum molestias natus
                commodi cum nisi?
              </Text>
            </Box>
            <Button size="lg" gap={2} alignSelf="flex-start">
              <FiDownload />
              Download CV
            </Button>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Services;
