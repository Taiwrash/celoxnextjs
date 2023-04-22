import { useEffect, useState } from 'react';
import { newKitFromWeb3 } from '@celo/contractkit';
import Web3 from 'web3';

const CeloWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const getWalletAddress = async () => {
      // Initialize ContractKit with the network endpoint
      const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
      const kit = newKitFromWeb3(web3);

      // Get the user's accounts
      const accounts = await kit.web3.eth.getAccounts();

      // Set the wallet address
      setWalletAddress(accounts[0]);
    };

    getWalletAddress();
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <p className="text-xl font-medium mb-2">Wallet Address</p>
      <p>{walletAddress}</p>
    </div>
  );
};

export default CeloWallet;