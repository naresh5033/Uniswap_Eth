import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x32EecC4e48b64C03fB452d9063B88082a357B859";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/f1TN8eSQ53l8azOTrm5OuRY7mrc7G82z",
  },
};
