import { SearchIcon, AtSignIcon } from "@chakra-ui/icons";
import {
  MdWallet,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
} from "react-icons/md";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <HStack bg={"gray.800"} spacing={3} px={12} py={3} align={"center"}>
      <Breadcrumb
        separator={"|"}
        textColor={"whiteAlpha.500"}
        fontWeight={"thin"}
        spacing={6}
        mr={4}
      >
        <BreadcrumbItem>
          <Stack direction={"row"} w={"max-content"}>
            <Image
              src={"https://opensea.io/static/images/logos/opensea-logo.svg"}
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              src={"svg/svgexport-1.svg"}
              alt="opensea"
              width={100}
              height={58}
            />
          </Stack>
        </BreadcrumbItem>

        <BreadcrumbItem fontWeight={"semibold"} textColor={"white"}>
          <Stack direction={"row"} spacing={6}>
            <BreadcrumbLink href="#">
              <Text>Drops</Text>
            </BreadcrumbLink>
            <BreadcrumbLink href="#">
              <Text>Stats</Text>
            </BreadcrumbLink>
          </Stack>
        </BreadcrumbItem>
      </Breadcrumb>

      <InputGroup w={"full"} filter="auto" blur="0.5px">
        <InputLeftElement>
          <SearchIcon color={"white"} />
        </InputLeftElement>
        <Input
          bg={"rgba(255, 255, 255, 0.12)"}
          border={"none"}
          textColor={"white"}
          placeholder="Search items, collections, and accounts"
          borderRadius={10}
          _placeholder={{ color: "white" }}
        />
        <InputRightElement>
          <Text
            bg={"rgba(255, 255, 255, 0.16)"}
            w={6}
            borderRadius={8}
            textAlign={"center"}
            textColor={"white"}
          >
            /
          </Text>
        </InputRightElement>
      </InputGroup>

      <Stack direction={"row"} spacing={0}>
        <Button
          borderRadius={10}
          borderRightRadius={0}
          bg={"rgba(255, 255, 255, 0.12)"}
          color={"white"}
          p={"12px"}
        >
          <Stack direction={"row"} align={"center"}>
            <Icon as={MdWallet} boxSize={"24px"} />
            <Text>Connect Wallet</Text>
          </Stack>
        </Button>
        <Button
          borderRadius={10}
          borderLeftRadius={0}
          borderLeft={"1px solid rgba(255, 255, 255, 0.4)"}
          bg={"rgba(255, 255, 255, 0.12)"}
          color={"white"}
          p={"12px"}
        >
          <Icon as={MdOutlineAccountCircle} boxSize={"28px"} />
        </Button>
      </Stack>

      <Button
        borderRadius={10}
        bg={"rgba(255, 255, 255, 0.12)"}
        color={"white"}
        p={"12px"}
      >
        <Icon as={MdOutlineShoppingCart} boxSize={"28px"} />
      </Button>
    </HStack>
  );
};

export default Header;
