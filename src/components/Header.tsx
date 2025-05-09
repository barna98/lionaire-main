import HeaderBg from './icons/header/HeaderBg.tsx';
import HeaderLogo from './icons/header/HeaderLogo.tsx';
import TelegramIcon from './icons/header/TelegramIcon.tsx';
import XIcon from './icons/header/XIcon.tsx';
import WalletIcon from './icons/header/WalletIcon.tsx';
import HeaderMobile from './header/HeaderMobile.tsx';

interface PropsType {
    setWalletOpen: (v: boolean) => void;
    walletOpen: boolean;
}

export default function Header({ setWalletOpen, walletOpen }: PropsType) {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <HeaderBg />
                    <a href="/"> <HeaderLogo /></a>
                    <nav className="header-nav">
                        <a className="header-nav-link" href="#about">
                            About
                        </a>
                        <a className="header-nav-link" href="#tokenomics">
                            Tokenomics
                        </a>
                        <a className="header-nav-link" href="#roadmap">
                            Roadmap
                        </a>
                        <a className="header-nav-link" href="/Whitepaper.pdf">
                            Whitepaper
                        </a>
                    </nav>
                    <div className="header-socials">
                        <a href="https://t.me/+GoiVzsSte85hMjU0" className="header-socials-link"><TelegramIcon /></a>
                        <a href="https://x.com/lionaireHQ" className="header-socials-link"><XIcon /></a>
                        <button onClick={() => setWalletOpen(true)} className="header-socials-button">
                            <WalletIcon />
                        </button>
                    </div>
                </div>
                <HeaderMobile setWalletOpen={setWalletOpen} walletOpen={walletOpen} />
            </div>
        </header>
    );
}