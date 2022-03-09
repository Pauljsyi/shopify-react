import React from "react";
import { Box, Text, Center, Heading } from "@chakra-ui/react";

const RichText = ({ heading, text }) => {
  return (
    <Box p="4rem">
      <Center display="flex" flexDir="column" textAlign="center" color="white">
        {/* <Heading py="2.5rem" fontFamily="odin_roundedbold">
          {heading && heading}
        </Heading> */}
        <Text pb="2rem">{text && text}</Text>
      </Center>
    </Box>
  );
};

export default RichText;
