import Layout from "@/components/layout";
import "@/styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora, goerli, sepolia],
  [
    alchemyProvider({ apiKey: `${process.env.NEXT_PUBLIC_API_KEY}` }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Web3",
  projectId: "7ce4ff2ac2cc61e73feebe46744b9126",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Head>
        <title>Price Index and NFTS</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </Layout>
      </ChakraProvider>
    </>
  );
}
