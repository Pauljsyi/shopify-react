import React from "react";
import { Box, Button, Text, Image, Center, Heading } from "@chakra-ui/react";

const RichText = ({ heading, text }) => {
  return (
    <Box p="4rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="2.5rem">{heading && heading}</Heading>
        <Text pb="2rem">{text && text}</Text>
      </Center>
    </Box>
  );
};

export default RichText;
