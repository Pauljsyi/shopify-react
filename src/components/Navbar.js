import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Icon, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingCart } from "react-icons/md";

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
      ></Icon>
      <Link to="/">
        <Text>LOGO</Text>
      </Link>
      {/* <Image src="" w={100} h={100} /> */}
      <Icon
        fill="white"
        cursor="pointer"
        as={MdShoppingCart}
        w={30}
        h={30}
        onClick={() => openCart()}
      >
        Carts
      </Icon>
    </Flex>
  );
};

export default Navbar;
