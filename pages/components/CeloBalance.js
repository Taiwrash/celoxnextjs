import { useEffect, useState } from 'react';
import { newKitFromWeb3 } from '@celo/contractkit';

const CeloBalance = () => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const getBalance = async () => {
      // Initialize ContractKit with the network endpoint
      const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
      const kit = newKitFromWeb3(web3);

      // Get the user's accounts
      const accounts = await kit.web3.eth.getAccounts();
      const account = accounts[0];

      // Get the user's CELO balance
      const celoBalance = await kit.getTotalBalance(account);
      const celoBalanceString = celoBalance.toFixed();

      // Set the balance state
      setBalance(celoBalanceString);
    };

    getBalance();
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <p className="text-xl font-medium mb-2">CELO Balance</p>
      <p>{balance} CELO</p>
    </div>
  );
};

export default CeloBalance;