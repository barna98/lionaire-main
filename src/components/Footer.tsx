import FooterTelegramIcon from './icons/footer/FooterTelegramIcon.tsx';
import FooterXIcon from './icons/footer/FooterXIcon.tsx';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-bg">
                <div className="footer-bg-col"></div>
                <div className="footer-bg-body">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-img">
                                <img src="/img/footer-lion.png" alt="leo" />
                            </div>
                            <div className="footer-img-mobile">
                                <img src="/img/footer-lion-mobile.png" alt="leo-mobile" />
                            </div>
                            <div className="footer-description">
                                <div className="footer-description-titles">
                                    <h2 className="footer-description-title">Lionaire</h2>
                                    <h4 className="footer-description-subtitle">Becoming a Billionaire? Nah… a
                                        Lionaire</h4>
                                </div>
                                <p className="footer-description-text">
                                    The crypto market is unpredictable. Be mindful of tax implications, as profits might
                                    be
                                    liable for capital gains or other taxes depending on your region. Regulatory
                                    guidelines
                                    vary, so it's crucial to know the specific rules that apply to you. Conduct thorough
                                    research and risk only what you can afford to lose.
                                </p>
                            </div>
                            <div className="footer-copyright">
                                <div className="footer-copyright-socials">
                                    <a href="https://t.me/+GoiVzsSte85hMjU0"><FooterTelegramIcon/></a>
                                    <a href="https://x.com/lionaireHQ"><FooterXIcon/></a>
                                </div>
                                <p className="footer-copyright-text">© 2025 Lionaire</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bg-col"></div>
            </div>

        </footer>
    );
}