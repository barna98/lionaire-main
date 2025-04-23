import { useState, useEffect, useRef } from 'react';
import TokenomicsDotItem from './TokenomicsDotItem.tsx';
import { useInView } from 'framer-motion';


interface PropsType {
    fill: string,
    title: string,
    percent: number
}


export default function TokenomicsItem({ fill, title, percent }: PropsType) {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [displayedPercent, setDisplayedPercent] = useState('');

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;

        let i = 0;
        const titleInterval = setInterval(() => {
            if (i < title.length) {
                setDisplayedTitle(title.slice(0, i + 1));
                i++;
            } else {
                clearInterval(titleInterval);
            }
        }, 120);

        let p = 0;
        const percentInterval = setInterval(() => {
            if (p <= percent) {
                setDisplayedPercent(p.toString());
                p++;
            } else {
                clearInterval(percentInterval);
            }
        }, 50);

        return () => {
            clearInterval(titleInterval);
            clearInterval(percentInterval);
        };
    }, [inView]);

    return (
        <div ref={ref} className="tokenomics-item">
            <TokenomicsDotItem fill={fill} />
            <div className="tokenomics-item-row">
                <span className="tokenomics-item-title">{displayedTitle}</span>
                <span className="tokenomics-item-title">{displayedPercent}%</span>
            </div>
        </div>
    );
}