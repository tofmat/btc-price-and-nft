import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-4 lg:py-8 lg:px-10">
        <Link href="/">
          {" "}
          <div className="flex gap-2 items-center">
            <Image
              src="/svg/bitcoin-svgrepo-com.svg"
              width={"20px"}
              alt="bitcoin"
            />
            <p className="text-lg">Bitcoin Price Index</p>
          </div>
        </Link>
        <Link href={"/nft"}>
          {" "}
          <Button
            bg="linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"
            border={"1px"}
            borderColor={"gray.500"}
            fontWeight={"extrabold"}
            px="6"
            color="white"
            _hover={{ boxShadow: "0px 4px 22px rgba(8, 12, 26, 0.25)" }}
          >
            NFTs
          </Button>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
