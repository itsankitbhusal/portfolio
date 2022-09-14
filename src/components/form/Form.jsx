import React from "react";
import {
  Container,
  Text,
  Flex,
  SimpleGrid,
  VStack,
  Heading,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  HStack,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Flex h="100vh" py={20}>
          <VStack spacing={1} w="full" h="full" p={10}>
            <HStack spacing={8}>
              <VStack spacing={2} marginBottom={4} align="center">
                <Heading>Shipping Details</Heading>
                <Text>Please fill all the fields below to place order. </Text>
              </VStack>
            </HStack>

            <SimpleGrid columns={2} columnGap={3} rowGap={4}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="Enter first name"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Enter last name"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea placeholder="Enter your address" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input placeholder="Enter your city" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select placeholder="Select Country">
                    <option value={"Nepal"}>Nepal</option>
                    <option value={"India"}>India</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Checkbox>Ship to the billing address</Checkbox>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button width="full" size="lg">
                  Place Item
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Form;
