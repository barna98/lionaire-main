import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
import 'swiper/modules/pagination.scss';

import { Pagination } from 'swiper/modules';

import 'swiper/swiper.scss';


export default function AboutSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                // breakpoints={{
                //     0: {
                //         slidesPerView: 5,
                //         slidesOffsetBefore: 90,
                //     },
                //     1100: {
                //         slidesPerView: 6,
                //     },
                //     1350: {
                //         slidesPerView: 7,
                //     },
                //     1450: {
                //         slidesPerView: 8,
                //     },
                //
                // }}
            >
                <SwiperSlide>
                    <div className="about-swiper-card">
                        <p className="about-swiper-text">What’s above millionaire and billionaire? Lionaire!
                            Roaring through charts, flexing diamond paws.
                            Powered by memes, fueled by dreams.
                            This ain’t just a token — it’s the rise of a legend.
                            Step into the jungle, where every roar leads to riches. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="about-swiper-card">
                        <p className="about-swiper-text">What’s above millionaire and billionaire? Lionaire!
                            Roaring through charts, flexing diamond paws.
                            Powered by memes, fueled by dreams.
                            This ain’t just a token — it’s the rise of a legend.
                            Step into the jungle, where every roar leads to riches. </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}