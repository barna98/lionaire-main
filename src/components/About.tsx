import AboutSwiperBg from './icons/about/AboutSwiperBg.tsx';
import RunningLine from './RunningLine.tsx';
import AboutSwiper from './about/AboutSwiper.tsx';
import AboutSwiperBgMobile from './icons/about/AboutSwiperBgMobile.tsx';

export default function About(){
    return(
        <section className="about" id="about">
            <img className="about-img" src="/img/about.png" alt="about" />
            <img className="about-img-mobile" src="/img/about-mobile.png" alt="about-mobile" />
            <div className="container">
                <div className="about-content">
                    <div className="about-slider">
                        <AboutSwiperBg />
                        <AboutSwiperBgMobile/>
                       <AboutSwiper/>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-line">
                <span className="black"></span>
                <span className="white"></span>
                <RunningLine className="about-line-swiper"/>
                <span className="white down"></span>
                <span className="black down"></span>
            </div>
        </section>
    )
}