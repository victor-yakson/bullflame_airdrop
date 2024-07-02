import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

//INTERNAL IMPORT
import airdrop from "./airdrop.json";
import iphone from "./iphone.json";

export const airdrop_ADDRESS = "0x37b56050CDbb9A6Fb99877AA066982fc2f337F06";
const airdrop_ABI = airdrop;

//IPHONE
export const iphone_ADDRESS = "0xAD6b79f1D3BB1c75b5aef80dF7239F4a5674F81c";
const iphone_ABI = iphone;

const fetchContract = (signer, ABI, ADDRESS) =>
  new ethers.Contract(ADDRESS, ABI, signer);

//NETWORK
const networks = {
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "BNB Smart Chain",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum)
      throw new Error(
        "Kindly copy and open this airdrop in your crypto wallet dApp browser to connect"
      );
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "bsc";
  await changeNetwork({ networkName });
};

export const web3Provider = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    return provider;
  } catch (error) {
    console.log(error);
  }
};

export const AirdropContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, airdrop_ABI, airdrop_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const IphoneContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, iphone_ABI, iphone_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

export const getEnsName = async (address) => {
  try {
    const provider = await web3Provider();
    const network = await provider.getNetwork();

    if (network.name === "homestead") {
      // ENS is supported on Ethereum mainnet
      const resolver = await provider.getResolver(address);
      if (resolver) {
        const ensName = await resolver.name();
        return ensName;
      } else {
        throw new Error("ENS name not found");
      }
    } else {
      // ENS is not supported on this network
      throw new Error(`ENS is not supported on the ${network.name} network`);
    }
  } catch (error) {
    console.log(error.message);
  }
};
