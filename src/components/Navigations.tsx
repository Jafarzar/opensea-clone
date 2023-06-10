import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react";
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
              modules={[Keyboard, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Navigations;
