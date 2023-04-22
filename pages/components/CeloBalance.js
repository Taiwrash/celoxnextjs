import { useContractKit } from '@celo-tools/use-contractkit';
import { useEffect, useState } from 'react';

export default function CeloBalance() {
  const { kit, address } = useContractKit();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const goldToken = await kit.contracts.getGoldToken();
      const balance = await goldToken.balanceOf(address);
      setBalance(balance.toString());
    }
    if (address) {
      fetchBalance();
    }
  }, [kit, address]);

  return (
    <div>
      <span className="font-bold">CELO Balance:</span> {balance}
    </div>
  );
}
