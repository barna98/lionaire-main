import HeaderBgMobile from '../icons/header/HeaderBgMobile.tsx';
import HeaderLogoMobile from '../icons/header/HeaderLogoMobile.tsx';
import React, { useEffect } from 'react';
import HeaderOverlayBg from '../icons/header/HeaderOverlayBg.tsx';
import TelegramIcon from '../icons/header/TelegramIcon.tsx';
import XIcon from '../icons/header/XIcon.tsx';
import HeaderButtonBg from '../icons/header/HeaderButtonBg.tsx';

interface PropsType {
    walletOpen: boolean;
    setWalletOpen: (v: boolean) => void;
}

export default function HeaderMobile({ setWalletOpen, walletOpen }: PropsType) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    useEffect(() => {
        document.body.style.overflowY = menuOpen ? 'hidden' : 'initial';
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) setWalletOpen(false);
    }, [menuOpen]);

    useEffect(() => {
        if (walletOpen) setMenuOpen(false);
    }, [walletOpen]);

    return (<>
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
            <div className="header-content-mobile">
                <HeaderBgMobile />
                <a href="/"> <HeaderLogoMobile /></a>
                <button onClick={() => {
                    setMenuOpen(!menuOpen);
                }} className={`header-button ${menuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {menuOpen && (
                    <nav className="header-mobile-menu">
                        <HeaderOverlayBg />
                        <a href="#about">About</a>
                        <a href="#tokenomics">Tokenomics</a>
                        <a href="#roadmap">Roadmap</a>
                        <a href="/">Whitepaper</a>
                        <div className="header-mobile-menu-socials">
                            <a href="/"><TelegramIcon /></a>
                            <a href="/"><XIcon /></a>
                        </div>
                        <button className="header-mobile-menu-button" onClick={() => setWalletOpen(true)}>
                            <HeaderButtonBg />
                            Connect Wallet
                        </button>
                    </nav>
                )}
            </div>
        </>
    );
}