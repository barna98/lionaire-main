import RoadmapItemChecked from '../icons/roadmap/RoadmapItemChecked.tsx';
import RoadmapItemLineStart from '../icons/roadmap/RoadmapItemLineStart.tsx';
import RoadmapItemLineEnd from '../icons/roadmap/RoadmapItemLineEnd.tsx';
import RoadmapItemNotCheked from '../icons/roadmap/RoadmapItemNotCheked.tsx';
import RoadmapItemBg from '../icons/roadmap/RoadmapItemBg.tsx';
import RoadmapItemBgChecked from '../icons/roadmap/RoadmapItemBgChecked.tsx';
import RoadmapItemBgNotChecked from '../icons/roadmap/RoadmapItemBgNotChecked.tsx';

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
    return <div className="roadmap-item">
        <div className="roadmap-item-card">
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
        </div>
        <div className="roadmap-item-track">
            {isFirst && <RoadmapItemLineStart />}
            <div className="roadmap-item-track-line"></div>
            {isChecked ? <RoadmapItemChecked /> : <RoadmapItemNotCheked />}
            {isLast && <RoadmapItemLineEnd />}
        </div>
    </div>;
}