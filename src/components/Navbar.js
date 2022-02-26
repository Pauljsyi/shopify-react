import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingCart } from "react-icons/md";
// import { logo } from "../assets/images/white-pick.png";

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor="rgb(255, 255, 255)"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="black"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
        alignItems="center"
      ></Icon>
      <Link to="/">
        <Image
          className="shadow-pop-tr"
          src="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/transparent_logo.png?v=1645836229"
          w={100}
          h={100}
        />
      </Link>
      <Box>
        <Icon
          fill="black"
          cursor="pointer"
          as={MdShoppingCart}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
