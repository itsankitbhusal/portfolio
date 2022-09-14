import { Container, Flex, IconButton, Link, VStack } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Container maxW="100%" bg="green.400" mt="-6rem" py="1rem">
      <VStack justify="center">
        <Flex gap="1rem" pt="1rem">
          <Link href="https://www.facebook.com/ankitbhusal20" isExternal>
            <IconButton icon={<FaFacebookF />} />
          </Link>
          <Link href="https://www.instagram.com/ankitbhusal20/" isExternal>
            <IconButton icon={<FaInstagram />} />
          </Link>
          <Link href="https://github.com/ankitbhusal" isExternal>
            <IconButton icon={<FaGithubAlt />} />
          </Link>
          <Link href="https://twitter.com/ankitbhusal95" isExternal>
            <IconButton icon={<FaTwitter />} />
          </Link>
          <Link href="https://www.linkedin.com/in/ankitbhusal/" isExternal>
            <IconButton icon={<FaLinkedinIn />} />
          </Link>
        </Flex>
        <Flex py=".5rem">
          Designed with{" "}
          <Flex justify="center" align="center" px=".3rem">
            <AiFillHeart justifyContent="center" />
          </Flex>
          by
          <Link
            pl=".3rem"
            fontWeight="bold"
            href="https://www.ankitbhusal.com.np/"
            isExternal
          >
            Ankit Bhusal
          </Link>
          .
        </Flex>
      </VStack>
    </Container>
  );
};

export default Footer;
