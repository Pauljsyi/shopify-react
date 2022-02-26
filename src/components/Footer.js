import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="rgb(232, 230, 230)">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        <Image
          w={["50%", "50%"]}
          // marginLeft="50%"
          m="auto"
          src="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/annie-spratt-yxk1vtoZqUg-unsplash.jpg?v=1645834769"
        />
        <VStack p="2rem">
          <Link to="/">Holiday Gift Candle Set</Link>
          <Link to="/">Custom Gift Candle Set</Link>
          <Link to="/">Scented Candle Jar Collection</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainability</Link>
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
