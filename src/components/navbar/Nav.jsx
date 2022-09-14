import {
  Flex,
  Heading,
  HStack,
  Button,
  Box,
  useColorMode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
// import Drawer from "./Drawer";

const Nav = () => {
  const { toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box w="100%" fontWeight="bold" align="center" boxShadow="lg">
        <Flex align="center" p={4} justify="space-between" maxW="90vw">
          {/* Logo section */}
          <HStack>
            <Heading
              _hover={{
                color: "gray",
                cursor: "pointer",
              }}
            >
              Logo
            </Heading>
          </HStack>

          {/* Main Links  */}
          <HStack gap={2} display={["none", "none", "flex", "flex"]}>
            <NavLinks />
          </HStack>

          {/* toggle color mode */}
          <HStack display={["none", "none", "flex", "flex"]}>
            <Box mx={4} _hover={{ color: "gray", cursor: "pointer" }}>
              <MdOutlineDarkMode
                size="1.5rem"
                my={4}
                onClick={toggleColorMode}
              />
            </Box>
            <Button>Get Started</Button>
          </HStack>

          {/* navbar on mobile */}
          <Flex align="center" display={["flex", "flex", "none", "none"]}>
            <Box mx={4} _hover={{ color: "gray", cursor: "pointer" }}>
              <MdOutlineDarkMode
                size="1.5rem"
                my={4}
                onClick={toggleColorMode}
              />
            </Box>

            {/* hamburger icon */}
            <IconButton
              icon={<GiHamburgerMenu />}
              onClick={onOpen}
              ref={btnRef}
            />

            {/* Drawer Starts */}
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Heading>Logo</Heading>
                </DrawerHeader>

                <DrawerBody>
                  <Flex direction="column" my={8}>
                    <NavLinks />
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
