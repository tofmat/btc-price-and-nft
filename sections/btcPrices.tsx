import { saveToLocalStorage } from "@/data/local-storage";
import { BtdPriceResponse } from "@/data/model";
import { Switch, Box, Text, Image } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  loading: boolean;
  fetchBtcPrices: BtdPriceResponse | null;
  availableCurrencies: string[];
  setAvailableCurrencies: any;
}
export const BtcPrices: FC<Props> = ({
  loading,
  fetchBtcPrices,
  availableCurrencies,
  setAvailableCurrencies,
}) => {
  return (
    <Box px={["6", "10", "20", "40"]} py={["6", "6", "8"]}>
      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="extrabold"
        textAlign={"center"}
      >
        Available Currencies
      </Text>
      {loading && (
        <>
          <p className="text-center text-xs">Fetching updated prices ...</p>
        </>
      )}
      {fetchBtcPrices && (
        <p className="text-center text-xs py-4">
          Prices last updated at:{" "}
          {new Date(fetchBtcPrices?.time?.updatedISO).toLocaleTimeString()}
        </p>
      )}

      <Box
        flexBasis={"100%"}
        gap="4"
        className="flex flex-col md:flex-row my-6 justify-between items-center"
      >
        {fetchBtcPrices && (
          <>
            {" "}
            <Box
              borderRadius="16px"
              border="4px solid rgba(255, 255, 255, 0.04)"
              bg="rgba(255, 255, 255, 0.03)"
              backdropFilter={"blur(20.381999969482422px)"}
              p="4"
            >
              <Box display="flex" gap="4" justifyContent={"space-between"}>
                <div className="flex items-center gap-2">
                  <Image src="/svg/coin_dollar.svg" width={"40px"} />
                  <div className="font-semibold">
                    <p>{fetchBtcPrices.bpi.USD.code}</p>
                    <p>{fetchBtcPrices.bpi.USD.description}</p>
                  </div>
                </div>
                <Switch
                  colorScheme="purple"
                  size={"lg"}
                  isChecked={availableCurrencies.includes("usd")}
                  onChange={() => {
                    let array = availableCurrencies.slice();
                    const index = array.find((currency) => currency === "usd");
                    // If matching item found
                    if (index) {
                      // Remove the item from the array
                      const newArray = array.filter(
                        (element) => element !== "usd"
                      );
                      setAvailableCurrencies(newArray);
                      saveToLocalStorage(
                        "availableCurrency",
                        newArray.join(", ")
                      );
                    } else {
                      // Add the item at the index
                      array.push("usd");
                      setAvailableCurrencies(array);
                      saveToLocalStorage("availableCurrency", array.join(", "));
                    }
                  }}
                />
              </Box>
              {availableCurrencies.includes("usd") ? (
                <Text pt="4" fontWeight={"600"} fontSize={"30px"}>
                  &#36;{fetchBtcPrices.bpi.USD.rate}
                </Text>
              ) : (
                <Text pt="4" fontWeight={"600"} fontSize={"30px"}>
                  &#36;*******
                </Text>
              )}
            </Box>
            <Box
              borderRadius="16px"
              border="4px solid rgba(255, 255, 255, 0.04)"
              bg="rgba(255, 255, 255, 0.03)"
              backdropFilter={"blur(20.381999969482422px)"}
              p="4"
            >
              <Box display="flex" gap="4" justifyContent={"space-between"}>
                <div className="flex items-center gap-2">
                  <Image src="/svg/coin_pound.svg" width={"40px"} />
                  <div className="font-semibold">
                    <p>{fetchBtcPrices.bpi.GBP.code}</p>
                    <p>{fetchBtcPrices.bpi.GBP.description}</p>
                  </div>
                </div>
                <Switch
                  colorScheme="purple"
                  size={"lg"}
                  isChecked={availableCurrencies.includes("gbp")}
                  onChange={() => {
                    let array = availableCurrencies.slice();
                    const index = array.find((currency) => currency === "gbp");
                    // If matching item found
                    if (index) {
                      // Remove the item from the array
                      const newArray = array.filter(
                        (element) => element !== "gbp"
                      );
                      setAvailableCurrencies(newArray);
                      saveToLocalStorage(
                        "availableCurrency",
                        newArray.join(", ")
                      );
                    } else {
                      // Add the item at the index
                      array.push("gbp");
                      setAvailableCurrencies(array);
                      saveToLocalStorage("availableCurrency", array.join(", "));
                    }
                  }}
                />
              </Box>
              {availableCurrencies.includes("gbp") ? (
                <Text pt="4" fontWeight={"600"} fontSize={"30px"}>
                  &pound;{fetchBtcPrices.bpi.GBP.rate}
                </Text>
              ) : (
                <Text pt="4" fontWeight={"600"} fontSize={"30px"}>
                  &pound;*******
                </Text>
              )}
            </Box>
            <Box
              borderRadius="16px"
              border="4px solid rgba(255, 255, 255, 0.04)"
              bg="rgba(255, 255, 255, 0.03)"
              backdropFilter={"blur(20.381999969482422px)"}
              p="4"
            >
              <Box display="flex" gap="4" justifyContent={"space-between"}>
                <div className="flex items-center gap-2">
                  <Image src="/svg/coin_euro.svg" width={"40px"} />
                  <div className="font-semibold">
                    <p>{fetchBtcPrices.bpi.EUR.code}</p>
                    <p>{fetchBtcPrices.bpi.EUR.description}</p>
                  </div>
                </div>
                <Switch
                  colorScheme="purple"
                  size={"lg"}
                  isChecked={availableCurrencies.includes("eur")}
                  onChange={() => {
                    let array = availableCurrencies.slice();
                    const index = array.find((currency) => currency === "eur");
                    // If matching item found
                    if (index) {
                      // Remove the item from the array
                      const newArray = array.filter(
                        (element) => element !== "eur"
                      );
                      setAvailableCurrencies(newArray);
                      saveToLocalStorage(
                        "availableCurrency",
                        newArray.join(", ")
                      );
                    } else {
                      // Add the item at the index
                      array.push("eur");
                      setAvailableCurrencies(array);
                      saveToLocalStorage("availableCurrency", array.join(", "));
                    }
                  }}
                />
              </Box>
              {availableCurrencies.includes("eur") ? (
                <Text pt="4" fontWeight={"600"} fontSize={"30px"}>
                  &euro;{fetchBtcPrices.bpi.EUR.rate}
                </Text>
              ) : (
                <Text pt="4" fontWeight={"600"} fontSize={"30px"}>
                  &euro;*******
                </Text>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
