import { NftCollections } from "@/sections/nftCollections";
import { Image, Box, Text } from "@chakra-ui/react";
export default function NftPage() {
  return (
    <>
      <main>
        <Image
          src="/png/spiral.png"
          position={"absolute"}
          left="0"
          top="0"
          zIndex={"-99"}
          alt="spiral"
        />
        <Box
          px={["4", "6", "10", "14"]}
          pb="4"
          zIndex={"99"}
          position={"relative"}
        >
          <Text
            fontSize={["4xl", "5xl", "80px"]}
            fontWeight="600"
            lineHeight={"normal"}
          >
            NFT Collections
          </Text>
          <p>
            uses testnets api at eth-goerli (please connect a test network,
            preferably sepolia, goerli )
          </p>
        </Box>
        <NftCollections />
      </main>
    </>
  );
}
