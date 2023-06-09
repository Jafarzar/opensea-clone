import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import {
  MdWallet,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
  MdPersonOutline,
  MdOutlineVisibility,
  MdGridOn,
  MdOutlineEdit,
  MdOutlineLibraryBooks,
  MdOutlineContactSupport,
  MdOutlineSettings,
  MdLanguage,
  MdOutlineModeNight,
  MdChevronRight,
} from "react-icons/md";

import {
  Badge,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Switch,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <HStack bg={"gray.800"} spacing={3} px={12} h={16} align={"center"}>
      <Stack
        direction={"row"}
        textColor={"white"}
        spacing={6}
        mr={4}
        align={"center"}
      >
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

        <Divider
          orientation="vertical"
          h={8}
          borderColor={"rgba(255, 255, 255, 0.4)"}
        />

        <Stack direction={"row"} spacing={6} fontWeight={"semibold"}>
          <Link>Drops</Link>
          <Link>Stats</Link>
        </Stack>
      </Stack>

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

        <Popover trigger="hover">
          <PopoverTrigger>
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
          </PopoverTrigger>
          <PopoverContent borderRadius={10} p={0} w={"max"}>
            <PopoverBody fontWeight={"semibold"} p={0}>
              <UnorderedList listStyleType={"none"} p={2} m={0}>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdPersonOutline} boxSize={"24px"} />
                    <Text>Profile</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdOutlineVisibility} boxSize={"24px"} />
                    <Text>Watchlist</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdGridOn} boxSize={"24px"} />
                    <Text>My Collections</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdOutlineEdit} boxSize={"24px"} />
                    <Text>Create</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Image
                      src={
                        "https://opensea.io/static/images/icons/opensea-pro-light.svg"
                      }
                      alt="os"
                      width={24}
                      height={24}
                    />
                    <Text>OpenSea Pro</Text>
                    <Badge
                      fontWeight={"medium"}
                      borderRadius={4}
                      bg={"blackAlpha.300"}
                      p={"2px"}
                      px={1}
                    >
                      New
                    </Badge>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdOutlineLibraryBooks} boxSize={"24px"} />
                    <Text>Learn</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdOutlineContactSupport} boxSize={"24px"} />
                    <Text>Help Center</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdOutlineSettings} boxSize={"24px"} />
                    <Text>Settings</Text>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon as={MdLanguage} boxSize={"24px"} />
                    <Text>Language</Text>
                    <Stack direction={"row"} spacing={0} pl={4}>
                      <Text>en</Text>
                      <Icon as={MdChevronRight} boxSize={"24px"} />
                    </Stack>
                  </Stack>
                </ListItem>
                <ListItem
                  p={3}
                  borderRadius={10}
                  _hover={{ cursor: "pointer", bg: "blackAlpha.100" }}
                  _active={{ bg: "blackAlpha.200" }}
                >
                  <Stack direction={"row"} align={"center"} spacing={3}>
                    <Icon
                      as={MdOutlineModeNight}
                      boxSize={"24px"}
                      style={{ transform: "rotate(45deg)" }}
                    />
                    <Text>Night Mode</Text>
                    <Switch pl={3} />
                  </Stack>
                </ListItem>
              </UnorderedList>
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
