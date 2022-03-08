import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";
const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;
  return (
    <Box bg="rgb(27, 27, 38)">
      <Hero />
      <RichText
        heading="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src}></Image>
              <Text
                position="absolute"
                bottom="15%"
                w="100%"
                fontWeight="bold"
                color="white"
              >
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="white-">
                $ {product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText
        heading="Treat Yourself"

        // text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/hanna-balan-W-CDfBfMCzQ-unsplash_ce62c038-29cd-44ce-b7a0-8f8b76b61b56.jpg?v=1645834026"
        heading="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        "
      />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/gio-gix-1_o9t54Lt6w-unsplash_d2648b5f-761e-436d-b71a-fffc5b6c83c6.jpg?v=1645834022"
        heading="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        "
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/carlos-rodriguez-hikzf2kf_Tw-unsplash.jpg?v=1645834817"
        heading="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        "
      />
    </Box>
  );
};

export default Home;
