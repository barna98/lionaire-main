
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/autoplay';

interface PropsType{
    className?: string;
}

export default function RunningLine({ className }: PropsType){
    return (
        <div className={className}>
            <Swiper
                spaceBetween={20}
                slidesPerView='auto'
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                freeMode={true}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 2.2,
                        slidesOffsetBefore: 90,
                    },
                    420: {
                        slidesPerView: 2.5,
                    },
                    700: {
                        slidesPerView: 3.8,
                    },
                    1000: {
                        slidesPerView: 4.5,
                    },
                    1100: {
                        slidesPerView: 6,
                    },
                    1350: {
                        slidesPerView: 7,
                    },
                    1450: {
                        slidesPerView: 8,
                    },

                }}
            >
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>$LNR NOW LIVE!</span>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}