import { Img } from "@chakra-ui/react";
import React from "react";

const RecentCard = ({ image, id }) => {
  return (
    <Img
      objectFit="cover"
      maxW={["300px", "300px", "300px", "400px"]}
      key={id}
      src={image}
      borderRadius="4px"
      _hover={{
        boxShadow: "0 0 30px  #2f524d",
        transition: ".3s all",
      }}
    />
  );
};

export default RecentCard;
