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
      backgroundColor="#FFA8E2"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="white"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
        alignItems="center"
      ></Icon>
      <Link to="/">
        LOGO
        {/* <Image src="white-pick.png" /> */}
      </Link>
      <Box>
        <Icon
          fill="white"
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
