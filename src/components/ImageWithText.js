import React from "react";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";

const ImageWithText = ({ reverse, image, heading, text }) => {
  const reverseSection = reverse ? "row-reverse" : "row";
  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%">
        <Image
          src={image}
          objectFit="cover"
          w={["100%", "50%"]}
          maxH={["560"]}
        />
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading color="white">{heading && heading}</Heading>
          <Text color="white">{text && text}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
