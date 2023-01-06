import React from "react";
import { Container, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container id="about-container">
      <Text fontSize="3xl" as="b">
        About Us
      </Text>
      <Text fontSize="lg">
        Founded in 2022, Klick Klack is the ultimate playground for keyboard
        enthusiasts and amateurs, alike. Our goal is to offer select, hand
        picked, best-of-the-best keyboards we can find and build. We are
        dedicated to the best customer service in this industry.
      </Text>
    </Container>
  );
};

export default About;
