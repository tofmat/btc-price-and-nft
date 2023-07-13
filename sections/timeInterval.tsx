import { saveToLocalStorage } from "@/data/local-storage";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  setTimeInterval: any;
  timeInterval: string;
}
export const TimeIntervals: FC<Props> = ({ setTimeInterval, timeInterval }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      py="8"
    >
      <Text fontSize={["16px", "20px", "30px"]} fontWeight={"600"} mr="2">
        Set prices to referesh every
      </Text>
      <Menu>
        <MenuButton>
          <Box
            bg="linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"
            className="flex items-center border border-gray-500 text-base font-semibold px-2 py-2 rounded-md"
          >
            <span className="text-white">{timeInterval} Seconds</span>
            <ChevronDownIcon color="#fff" />
          </Box>
        </MenuButton>
        <MenuList fontSize={"16px"} color="#FF0080" fontWeight={"600"}>
          <MenuItem
            onClick={() => {
              setTimeInterval("5");
              saveToLocalStorage("timeInterval", "5");
            }}
          >
            5 Seconds
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTimeInterval("10");
              saveToLocalStorage("timeInterval", "10");
            }}
          >
            10 Seconds
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTimeInterval("20");
              saveToLocalStorage("timeInterval", "20");
            }}
          >
            20 Seconds
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTimeInterval("30");
              saveToLocalStorage("timeInterval", "30");
            }}
          >
            30 Seconds
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTimeInterval("60");
              saveToLocalStorage("timeInterval", "60");
            }}
          >
            60 Seconds
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
