import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import instance from "@/data/axios-setup";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import { NftResponse } from "@/data/model";

export const NftCollections = () => {
  // get address and isConnected status from wagmi
  const { address, isConnected } = useAccount();

  // set apiKey and baseUrl
  const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
  const baseURL = `https://eth-goerli.g.alchemy.com/nft/v2/${apiKey}/getNFTs/?owner=${address}`;

  // create a state to house the response from alchemy api
  const [nftCollections, setNftCollections] = useState<NftResponse[]>([]);

  // use alchemy api to get list of nfts connected to a connected address anytime a wallet is connected and address is added
  useEffect(() => {
    if (isConnected && address) {
      instance
        .get(baseURL)
        .then((response) => {
          // Process the response data
          setNftCollections(response.data.ownedNfts);
        })
        .catch((error) => {
          setNftCollections([]);
          console.error(error);
        });
    }
  }, [isConnected, address]);
  return (
    <Box px={["4", "6", "10", "14"]} py="10">
      <Box display={"flex"} justifyContent={"center"} pt="4">
        <ConnectButton label={"Connect Wallet"} />
      </Box>
      {nftCollections.length > 0 ? (
        <>
          <Grid py="8" templateColumns="repeat(3, 1fr)" gap={6}>
            {nftCollections.map((nft) => (
              <GridItem>
                <Box>
                  <Image src={nft?.media[0]?.thumbnail} w="full" />
                  <Box
                    borderRadius={"0px 0px 12px 12px"}
                    border="4px solid rgba(255, 255, 255, 0.04)"
                    bg="rgba(255, 255, 255, 0.03)"
                    backdropFilter={" blur(20.381999969482422px)"}
                    p="6"
                  >
                    <Text fontSize={"16px"} color="gray.400" fontWeight={"500"}>
                      ({nft?.contractMetadata?.deployedBlockNumber})
                    </Text>
                    <Text fontSize={"30px"} fontWeight={"800"}>
                      {nft?.contractMetadata?.name}
                    </Text>
                    <Text fontSize={"14px"} color="gray.500">
                      {nft?.contract?.address}
                    </Text>
                    <Text fontSize={"20px"} fontWeight={"800"}>
                      {nft?.contractMetadata?.tokenType}
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Text
            pt="8"
            fontSize={["4xl", "5xl", "40px"]}
            fontWeight="600"
            lineHeight={"normal"}
            pb="4"
            textAlign={"center"}
          >
            Oops! 😢 You have no NFT at the moment
          </Text>
        </>
      )}
    </Box>
  );
};
