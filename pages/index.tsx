import { Box, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getFromLocalStorage } from "@/data/local-storage";
import instance from "@/data/axios-setup";
import { BtdPriceResponse } from "@/data/model";
import { HeroSection } from "@/sections/hero";
import { TimeIntervals } from "@/sections/timeInterval";
import { BtcPrices } from "@/sections/btcPrices";

export default function Home() {
  const [timeInterval, setTimeInterval] = useState<string>("5");
  const [availableCurrencies, setAvailableCurrencies] = useState([
    "usd",
    "gbp",
    "eur",
  ]);

  const [fetchBtcPrices, setFetchBtcPrices] = useState<BtdPriceResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const getBtcPrices = () => {
    setLoading(true);
    instance
      .get("/bpi/currentprice.json")
      .then((response) => {
        // Process the response data
        setLoading(false);
        setFetchBtcPrices(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    const savedTimeInterval = getFromLocalStorage("timeInterval");
    const savedAvailableCurrencies = getFromLocalStorage("availableCurrency");
    setTimeInterval(savedTimeInterval ?? "5");
    setAvailableCurrencies(
      savedAvailableCurrencies
        ? savedAvailableCurrencies.split(", ")
        : ["usd", "gbp", "eur"]
    );
    getBtcPrices();
  }, []);

  // change the interval everytime the user changes the time interval
  useEffect(() => {
    const savedTimeInterval = getFromLocalStorage("timeInterval");
    // Start the interval when the component mounts
    const interval = setInterval(
      getBtcPrices,
      savedTimeInterval ? +savedTimeInterval * 1000 : +timeInterval * 1000
    ); // Convert timeInterval to milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timeInterval]);

  return (
    <main>
      <Image
        src="/png/spiral.png"
        position={"absolute"}
        left="0"
        top="0"
        zIndex={"-99"}
        alt="spiral"
      />
      <Box px={["2", "4", "8", "10"]} zIndex={"99"} position={"relative"}>
        <HeroSection />
        <Image
          src="png/world.png"
          position={"absolute"}
          zIndex={"-99"}
          w="full"
          alt="world"
        />
        <TimeIntervals
          setTimeInterval={setTimeInterval}
          timeInterval={timeInterval}
        />
        <BtcPrices
          loading={loading}
          fetchBtcPrices={fetchBtcPrices}
          availableCurrencies={availableCurrencies}
          setAvailableCurrencies={setAvailableCurrencies}
        />
      </Box>
    </main>
  );
}
