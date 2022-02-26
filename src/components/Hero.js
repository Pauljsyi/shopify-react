import React from "react";
import { Box, Button, Text, Image, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      backgroundColor="rgb(232, 230, 230)"
      w="100%"
      position="relative"
      h="70vh"
    >
      <Image
        // src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
        src="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/annie-spratt-yxk1vtoZqUg-unsplash.jpg?v=1645834769"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />
      <Text
        position="absolute"
        bottom={["50%", "20%"]}
        w="100%"
        textAlign="center"
        color="black"
        // textShadow="2px 3px white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Introducing Scented Candles
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="#FF38BD"
          color="white"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
