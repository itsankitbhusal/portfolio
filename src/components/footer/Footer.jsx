import { Container, Flex, IconButton, Link, VStack } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import socialLinksData from './socialLinks.json'; 
import { AiFillHeart } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Container maxW="100%" bg="green.400" mt="-6rem" py="1rem">
      <VStack justify="center">
        <Flex gap="1rem" pt="1rem">
        {socialLinksData.socialLinks.map((link, index) => (
            <Link key={index} href={link.url} isExternal>
              {link.platform === 'Facebook' && <IconButton icon={<FaFacebookF />} />}
              {link.platform === 'Instagram' && <IconButton icon={<FaInstagram />} />}
              {link.platform === 'GitHub' && <IconButton icon={<FaGithubAlt />} />}
              {link.platform === 'Twitter' && <IconButton icon={<FaTwitter />} />}
              {link.platform === 'LinkedIn' && <IconButton icon={<FaLinkedinIn />} />}
            </Link>
          ))}
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
  )
};

export default Footer;
