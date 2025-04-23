import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useInView } from 'framer-motion';

// @ts-expect-error
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

const TypeWriterText = ({ text = '', speed = 40 }) => {
    const [displayed, setDisplayed] = useState('');
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;

        let i = 0;
        setDisplayed('');

        const interval = setInterval(() => {
            setDisplayed((prev) => prev + text[i]);
            i++;
            if (i >= text.length - 1) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [inView, text, speed]);

    return <p ref={ref} className="about-swiper-text">{displayed}</p>;
};

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
                        <TypeWriterText
                            text={`What’s above millionaire and billionaire? Lionaire! Roaring through charts, flexing diamond paws. Powered by memes, fueled by dreams. This ain’t just a token — it’s the rise of a legend. Step into the jungle, where every roar leads to riches.`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="about-swiper-card">
                        <TypeWriterText
                            text={`Lionaire is more than crypto — it’s a journey. A bold new realm where memes meet ambition, and every holder becomes part of the pride. Unleash your inner beast, hunt for treasures, and help write the next chapter of this wild adventure `}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
        ;
}