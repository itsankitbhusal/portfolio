import { Flex, Container, Heading, IconButton } from "@chakra-ui/react";
import { SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import React from "react";

const Current = () => {
  return (
    <Container
      my="2rem"
      bg="green.400"
      maxW="100vw"
      height={["25vh", "10vh", "10vh", "10vh"]}
      mt="4rem"
      px="5vw"
    >
      <Flex
        align="center"
        gap={4}
        height="inherit"
        justify={["center", "space-between", "space-between", "space-between"]}
        flexWrap={["wrap", "wrap", "auto", "auto"]}
      >
        <Heading fontSize="4xl" fontWeight="bold">
          My Stack
        </Heading>
        <Flex gap={4}>
          <IconButton aria-label="MySQL" size="lg" icon={<GrMysql />} />
          <IconButton aria-label="Express" size="lg" icon={<SiExpress />} />
          <IconButton aria-label="React" size="lg" icon={<SiReact />} />
          <IconButton aria-label="Node" size="lg" icon={<SiNodedotjs />} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Current;
