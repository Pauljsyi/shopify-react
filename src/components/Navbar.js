import React, { useContext } from "react";
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
      <Icon fill="white" as={MdMenu} w={30} h={30}></Icon>
      <Text>LOGO</Text>
      {/* <Image src="" w={100} h={100} /> */}
      <Icon
        fill="white"
        as={MdShoppingCart}
        w={30}
        h={30}
        onClick={() => openCart()}
      >
        Cart
      </Icon>
    </Flex>
  );
};

export default Navbar;
