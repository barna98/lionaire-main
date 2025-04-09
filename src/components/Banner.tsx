import RunningLine from './RunningLine.tsx';
import BannerForm from './icons/banner/BannerForm.tsx';
import BannerFormMobile from './icons/banner/BannerFormMobile.tsx';

export default function Banner() {
    return (
        <section className="banner">
            <img className="banner-img" src="/img/banner.png" alt="banner" />
            <img className="banner-img-mobile" src="/img/banner-mobile-main.png" alt="banner-mobile" />
            <div className="container">
                <div className="banner-content">
                    <h1 className="banner-title">
                        Lionaire – The Crypto <br />
                        Kingpin of the Jungle
                    </h1>
                    <p className="banner-text">
                        Becoming a Billionaire? Nah… a Lionaire
                    </p>
                    <BannerForm />
                    <BannerFormMobile />
                </div>
            </div>
            <div className="banner-line">
                <span className="black"></span>
                <span className="white"></span>
                <RunningLine className="banner-line-swiper" />
                <span className="white down"></span>
                <span className="black down"></span>
            </div>
        </section>
    );
}