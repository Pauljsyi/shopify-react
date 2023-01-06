import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack, Video } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="rgb(232, 230, 230)">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        <iframe
          src="https://giphy.com/embed/gKQ9YTaITol9EdC2Hi"
          width="480"
          height="320"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>

        <VStack p="2rem">
          <Link to="/">Yellow Mellow 60</Link>
          <Link to="/">Fruity Loops 60</Link>
          <Link to="/">Clear Milky Black Alice 60</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/about">About Us</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="black"
          w="100%"
          borderTop="1px solid white"
          p="1rem"
        >
          @ www.pauljsyi.com
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
