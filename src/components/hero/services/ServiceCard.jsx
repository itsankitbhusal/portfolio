import React from "react";
import { IconButton, HStack, Text, VStack, Flex } from "@chakra-ui/react";

const ServiceCard = ({ name, icon }) => {
  return (
    <>
      <Flex
        border="1px"
        borderRadius="md"
        borderColor="gray.100"
        p="1rem"
        _hover={{
          backgroundColor: "gray.100",
          cursor: "pointer",
          color: "black",
          transition: ".3s all",
        }}
      >
        <HStack>
          <IconButton
            p="1rem"
            fontSize="4rem"
            variant="ghost"
            icon={icon}
            color="green.400"
          />
          <VStack>
            <Text as="h2" fontWeight="bold" alignSelf="flex-start">
              {name}
            </Text>
            <Text fontSize=".7em" fontWeight="normal" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              non. Laboriosam eos quos obcaecati adipisci voluptatibus
              provident.
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default ServiceCard;
