import TokenomicsDotItem from './TokenomicsDotItem.tsx';


interface PropsType {
    fill: string,
    title: string,
    percent: number
}


export default function TokenomicsItem({ fill, title, percent }: PropsType) {
    return (
        <div className="tokenomics-item">
            <TokenomicsDotItem fill={fill} />
            <div className="tokenomics-item-row">
                <span className="tokenomics-item-title">{title}</span>
                <span className="tokenomics-item-title">{percent}%</span>
            </div>
        </div>
    );
}