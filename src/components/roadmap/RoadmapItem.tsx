import RoadmapItemChecked from '../icons/roadmap/RoadmapItemChecked.tsx';
import RoadmapItemLineStart from '../icons/roadmap/RoadmapItemLineStart.tsx';
import RoadmapItemLineEnd from '../icons/roadmap/RoadmapItemLineEnd.tsx';
import RoadmapItemNotCheked from '../icons/roadmap/RoadmapItemNotCheked.tsx';
import RoadmapItemBg from '../icons/roadmap/RoadmapItemBg.tsx';
import RoadmapItemBgChecked from '../icons/roadmap/RoadmapItemBgChecked.tsx';
import RoadmapItemBgNotChecked from '../icons/roadmap/RoadmapItemBgNotChecked.tsx';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface PropsType {
    isFirst?: boolean;
    isLast?: boolean;
    isChecked?: boolean;
    phase: string;
    title: string;
    articleOne: string;
    articleTwo: string;
    articleThree: string;
}

export default function RoadmapItem({
                                        isFirst,
                                        isLast,
                                        isChecked,
                                        phase,
                                        title,
                                        articleOne,
                                        articleTwo,
                                        articleThree,
                                    }: PropsType) {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { margin: '-200px 0px' });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return <div className="roadmap-item">
        <motion.div className="roadmap-item-card"
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}>
            <div className="roadmap-item-bg">
                <RoadmapItemBg />
            </div>
            <div className="roadmap-item-bg-mobile">
                {isChecked ? <RoadmapItemBgChecked /> : <RoadmapItemBgNotChecked />}
            </div>
            <span className="roadmap-item-card-phase">{phase}</span>
            <h4 className="roadmap-item-card-title">{title}</h4>
            <ul className="roadmap-item-card-list">
                <li>{articleOne}</li>
                <li>{articleTwo}</li>
                <li>{articleThree}</li>
            </ul>
        </motion.div>
        <div className="roadmap-item-track">
            {isFirst && <RoadmapItemLineStart />}
            <div className="roadmap-item-track-line"></div>
            <motion.div className="checked"
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}>
                {isChecked ? <RoadmapItemChecked /> : <RoadmapItemNotCheked />}
            </motion.div>
            {isLast && <RoadmapItemLineEnd />}
        </div>
    </div>
        ;
}