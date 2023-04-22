import { useContractKit } from '@celo-tools/use-contractkit';
import { useEffect, useState } from 'react';

export default function CeloWallet() {
  const { address, connect } = useContractKit();
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    if (address) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [address]);
  const handleClick = async () => {
    try {
      await connect();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {connected ? (
        <span className="text-green-500">{address}</span>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
