import HeaderBg from './icons/header/HeaderBg.tsx';
import HeaderLogo from './icons/header/HeaderLogo.tsx';
import TelegramIcon from './icons/header/TelegramIcon.tsx';
import XIcon from './icons/header/XIcon.tsx';
import WalletIcon from './icons/header/WalletIcon.tsx';
import HeaderMobile from './header/HeaderMobile.tsx';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <HeaderBg />
                    <a href="/"> <HeaderLogo /></a>
                    <nav className="header-nav">
                        <a className="header-nav-link" href="/">
                            About
                        </a>
                        <a className="header-nav-link" href="/">
                            Tokenomics
                        </a>
                        <a className="header-nav-link" href="/">
                            Roadmap
                        </a>
                        <a className="header-nav-link" href="/">
                            Whitepaper
                        </a>
                    </nav>
                    <div className="header-socials">
                        <a href="/" className="header-socials-link"><TelegramIcon /></a>
                        <a href="/" className="header-socials-link"><XIcon /></a>
                        <a href="/" className="header-socials-link"><WalletIcon /></a>
                    </div>
                </div>
               <HeaderMobile/>
            </div>
        </header>
    );
}