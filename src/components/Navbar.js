import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
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
          src="https://cdn.shopify.com/s/files/1/0555/2717/8325/files/pinklogo.png?v=1645862526"
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
        <Badge
          backgroundColor="black"
          borderRadius="50%"
          color="white"
          position="absolute"
        >
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
