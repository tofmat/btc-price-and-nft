export interface BtdPriceResponse {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  bpi: {
    USD: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
    GBP: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
    EUR: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
}

export interface NftResponse {
  media: {
    thumbnail: string;
  }[];
  contractMetadata: {
    deployedBlockNumber: string;
    name: string;
    tokenType: string;
  };
  contract: {
    address: string;
  };
}
