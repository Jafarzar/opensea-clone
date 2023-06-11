import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const Navigations = () => {
  return (
    <Box
      px={16}
      py={6}
      textColor={"white"}
      fontWeight={"semibold"}
      bg={"blue.700"}
    >
      <Tabs variant={"none"}>
        <TabList gap={2}>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _selected={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            All
          </Tab>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            Art
          </Tab>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            Gaming
          </Tab>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            Memberships
          </Tab>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            PFPs
          </Tab>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            Photography
          </Tab>
          <Tab
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={10}
            _focus={{ bg: "rgba(255, 255, 255, 0.12)" }}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
          >
            Music
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Swiper
              slidesPerView={4}
              slidesPerGroup={4}
              centeredSlides={false}
              loop
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              style={{
                // @ts-ignore comment
                "--swiper-navigation-color": "black",
              }}
              modules={[Keyboard, Navigation]}
              spaceBetween={24}
            >
              <SwiperSlide>
                <Box
                  position={"relative"}
                  w={"432px"}
                  h={"432px"}
                  borderRadius={10}
                  overflow={"hidden"}
                  role="group"
                >
                  <Image
                    src={
                      "https://i.seadn.io/s/production/3e7c7b10-f282-445f-bfb9-c24b60a11288.png?auto=format&dpr=1&w=828"
                    }
                    alt="nav"
                    boxSize={"max"}
                    position={"absolute"}
                    objectFit={"cover"}
                    borderRadius={10}
                    transition={"transform 0.5s ease"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    zIndex={1}
                  />
                  <Stack zIndex={2}>
                    <Text zIndex={2}>asdadasd</Text>
                    <Text zIndex={2}>asdasd</Text>
                  </Stack>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box
                  position={"relative"}
                  w={"432px"}
                  h={"432px"}
                  borderRadius={10}
                  overflow={"hidden"}
                  role="group"
                >
                  <Image
                    src={
                      "https://i.seadn.io/s/production/3e7c7b10-f282-445f-bfb9-c24b60a11288.png?auto=format&dpr=1&w=828"
                    }
                    alt="nav"
                    boxSize={"max"}
                    position={"absolute"}
                    objectFit={"cover"}
                    borderRadius={10}
                    transition={"transform 0.5s ease"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    zIndex={1}
                  />
                  <Stack zIndex={2}>
                    <Text zIndex={2}>asdadasd</Text>
                    <Text zIndex={2}>asdasd</Text>
                  </Stack>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box
                  position={"relative"}
                  w={"432px"}
                  h={"432px"}
                  borderRadius={10}
                  overflow={"hidden"}
                  role="group"
                >
                  <Image
                    src={
                      "https://i.seadn.io/s/production/3e7c7b10-f282-445f-bfb9-c24b60a11288.png?auto=format&dpr=1&w=828"
                    }
                    alt="nav"
                    boxSize={"max"}
                    position={"absolute"}
                    objectFit={"cover"}
                    borderRadius={10}
                    transition={"transform 0.5s ease"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    zIndex={1}
                  />
                  <Stack zIndex={2}>
                    <Text zIndex={2}>asdadasd</Text>
                    <Text zIndex={2}>asdasd</Text>
                  </Stack>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box
                  position={"relative"}
                  w={"432px"}
                  h={"432px"}
                  borderRadius={10}
                  overflow={"hidden"}
                  role="group"
                >
                  <Image
                    src={
                      "https://i.seadn.io/s/production/3e7c7b10-f282-445f-bfb9-c24b60a11288.png?auto=format&dpr=1&w=828"
                    }
                    alt="nav"
                    boxSize={"max"}
                    position={"absolute"}
                    objectFit={"cover"}
                    borderRadius={10}
                    transition={"transform 0.5s ease"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    zIndex={1}
                  />
                  <Stack zIndex={2}>
                    <Text zIndex={2}>asdadasd</Text>
                    <Text zIndex={2}>asdasd</Text>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Navigations;
