import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Banner from './components/Banner.tsx';
import About from './components/About.tsx';
import Tokenomics from './components/Tokenomics.tsx';
import RoadMap from './components/RoadMap.tsx';
import WalletPopup from './components/wallet-popup/WalletPopup.tsx';
import { useState } from 'react';

function App() {
    const [walletOpen, setWalletOpen] = useState(false);

    return <>
        <Header walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
        <main>
            <Banner setWalletOpen={setWalletOpen} />
            <WalletPopup walletOpen={walletOpen} setWalletOpen={setWalletOpen} />
            <About />
            <Tokenomics />
            <RoadMap />
        </main>
        <Footer />

    </>;
}

export default App;
