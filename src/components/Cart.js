import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { CloseIcon } from "@chakra-ui/icons";

import {
  Box,
  Link,
  Image,
  Flex,
  Text,
  Grid,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  console.log(checkout);
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm"
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    <CloseIcon
                      cursor="pointer"
                      onClick={() => removeLineItem(item.id)}
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image src={item.variant.image.src}></Image>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box h="100%" w="100%">
                <Text
                  h="100%"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  Cart is empty!
                </Text>
              </Box>
            )}
          </DrawerBody>

          {checkout.lineItems?.length ? (
            <DrawerFooter>
              <Button colorScheme="blue" w="100%">
                <Link href={checkout.webUrl} w="100%">
                  Checkout
                </Link>
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
