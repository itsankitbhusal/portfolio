import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const SchrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box pos="fixed" right="1rem" bottom="1rem">
      {showTopBtn && (
        <Flex
          onClick={() => {
            goToTop();
          }}
        >
          <IconButton borderRadius="100%" icon={<FaAngleUp />} />
        </Flex>
      )}
    </Box>
  );
};

export default SchrollToTop;
