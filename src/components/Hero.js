import React from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      // backgroundColor="rgb(232, 230, 230)"
      // w="100%"
      // h="50vh"
      position="relative"
      h="auto"
    >
      <Box h={["10vh", "20vh", "30vh", "40vh"]} overflow="hidden">
        <Image
          // src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
          src="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/jay-zhang-F5sLpXuAShA-unsplash.jpg?v=1646789820"
          w="100%"
          h="auto"

          // m="auto"
        />
        <Text
          className="text-pop-up-top"
          position="absolute"
          bottom={["50%", "35%"]}
          w="100%"
          textAlign="center"
          color="#FF38BD"
          fontWeight="bold"
          fontSize="3vw"
          fontFamily="odin_roundedbold"
        >
          KEYBOARDS
        </Text>
      </Box>

      <Center>
        {/* <Button
          w="10rem"
          backgroundColor="#FF38BD"
          color="white"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button> */}
      </Center>
    </Box>
  );
};

export default Hero;
