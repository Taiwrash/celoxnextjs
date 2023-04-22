import Head from 'next/head';
import CeloWallet from './components/CeloWallet';
import CeloBalance from './components/CeloBalance';


export default function Home() {
return (
<div>
<Head>
<title>Celo Dapp</title>
<link rel="icon" href="/favicon.ico" />
</Head>
<main>
    <h1 className="text-4xl font-bold mb-8">Celo Dapp</h1>
    <CeloWallet />
    <CeloBalance />
  </main>
</div>
);
}
