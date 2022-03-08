import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingCart } from "react-icons/md";
// import { logo } from "../assets/images/white-pick.png";

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor="rgb(27, 27, 38)"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="rgb(229, 198, 70)"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
        alignItems="center"
      ></Icon>
      <Link to="/">
        {/* <Image
          className="shadow-pop-tr"
          src="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/pinklogo.png?v=1645862526"
          w={100}
          h={100}
        /> */}
        <Heading
          className="heading"
          color="rgb(229, 198, 70)"
          style={{ fontFamily: "odin_roundedbold" }}
        >
          Klick Klack
        </Heading>
      </Link>
      <Box>
        <Icon
          fill="rgb(229, 198, 70)"
          cursor="pointer"
          as={MdShoppingCart}
          w="1.5rem"
          h={30}
          onClick={() => openCart()}
        />
        <Badge
          backgroundColor="transparent"
          fontSize="1.1rem"
          borderRadius="50%"
          color="rgb(229, 198, 70)"
          position="absolute"
        >
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
