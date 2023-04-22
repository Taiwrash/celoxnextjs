import { ContractKit } from '@celo/contractkit';

let kit;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' });
kit = ContractKit.newKitFromWeb3(web3);
} else {
// We are on the server OR the user is not running metamask.
kit = ContractKit.newKit(process.env.NEXT_PUBLIC_RPC_URL);
}

export default kit;
