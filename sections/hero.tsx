import { Stack, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export const HeroSection = () => {
  return (
    <Stack px={["4", "6", "6", "10"]}>
      <Stack
        direction={["row"]}
        alignItems="center"
        display={["column", "column", "flex"]}
        py="6"
      >
        <Box flexBasis={["60%", "60%", "60%", "50%"]}>
          <Stack direction={"row"} alignItems="center">
            <Text
              fontSize={["4xl", "5xl", "80px"]}
              fontWeight="600"
              lineHeight={"normal"}
              pb="4"
            >
              Bitcoin Price Index
            </Text>
          </Stack>
          <p className="font-semibold text-lg">
            This app contains price details of USD, GBP and EUR currencies,
            refreshed at a default interval of 5 seconds. Also includes feature
            to allow user choose between different data refresh intervals and
            toggle on/off some of the currencies displayed.
          </p>
        </Box>
        <Box flexBasis={["40%", "40%", "40%", "50%"]} flexShrink="0">
          <Image src="/png/btc2.png" margin={"auto"} />
        </Box>
      </Stack>
    </Stack>
  );
};
