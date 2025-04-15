import RunningLine from './RunningLine.tsx';
import TokenomicsCircle from './icons/tokenomics/TokenomicsCircle.tsx';
import TokenomicsItem from './icons/tokenomics/TokenomicsItem.tsx';
import animation from './tokenomics.json';
import Lottie from 'lottie-react';


export default function Tokenomics() {
    return (
        <section className="tokenomics" id="tokenomics">
            <Lottie className="tokenomics-img" animationData={animation}/>
            <div className="container">
                <div className="tokenomics-content">
                    <div className="tokenomics-circle">
                        <TokenomicsCircle />
                    </div>
                    <div className="tokenomics-table">
                        <TokenomicsItem fill="#E3C82F" title="PRESALE" percent={50} />
                        <TokenomicsItem fill="#26B9AD" title="ECOSYSTEM" percent={20} />
                        <TokenomicsItem fill="#D36516" title="STAKING" percent={15} />
                        <TokenomicsItem fill="#196CCA" title="COMMUNITY" percent={10} />
                        <TokenomicsItem fill="#B21194" title="TEAM" percent={5} />

                    </div>
                </div>
            </div>
            <div className="tokenomics-line">
                <span className="black"></span>
                <span className="white"></span>
                <RunningLine className="about-line-swiper" />
                <span className="white down"></span>
                <span className="black down"></span>
            </div>
        </section>
    );
}