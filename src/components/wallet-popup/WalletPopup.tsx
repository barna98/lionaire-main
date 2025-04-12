import WalletPopupBg from '../icons/wallet-popup/WalletPopupBg.tsx';
import WalletPopupBgMobile from '../icons/wallet-popup/WalletPopupBgMobile.tsx';
import WalletButton from './WalletButton.tsx';
import WalletClose from './WalletClose.tsx';
import { useEffect } from 'react';

interface PropsType {
    setWalletOpen: (open: boolean) => void;
    walletOpen: boolean;
}

export default function WalletPopup({ walletOpen, setWalletOpen }: PropsType) {

    useEffect(() => {
        document.body.style.overflowY = walletOpen ? 'hidden' : 'initial';
    }, [walletOpen]);

    if (!walletOpen) {
        return <></>;
    }

    return (
        <>
            {walletOpen && <div className="overlay-wallet-popup" onClick={() => setWalletOpen(false)}></div>}
            <div className="wallet-popup">
                <WalletPopupBg />
                <WalletPopupBgMobile />
                <h4 className="wallet-popup-title">Select your wallet</h4>
                <WalletButton title="WalletConnect" icon="../img/wallet-connect.png" />
                <WalletButton title="MetaMask" icon="../img/wallet-meta.png" />
                <WalletButton title="CoinBase Wallet" icon="../img/wallet-coin.png" />
                <button onClick={() => setWalletOpen(!walletOpen)} className="wallet-popup-close">
                    <WalletClose />
                </button>
            </div>
        </>
    );
}