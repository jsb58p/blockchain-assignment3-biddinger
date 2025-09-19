import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

const RPC_URL = process.env.RPC_URL!;
const CHAIN_ID = Number(process.env.CHAIN_ID || "31337");
const PRIVKEY = process.env.PRIVKEY!;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    didlab: {
      url: RPC_URL,
      chainId: CHAIN_ID,
      accounts: process.env.PRIVKEY ? [process.env.PRIVKEY] : [],
      type: "http", // Only allowed types are "http" and "edr-simulated"
    },
  },
};

export default config;
