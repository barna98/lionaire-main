import RoadmapItem from './roadmap/RoadmapItem.tsx';

export default function RoadMap() {
    return (
        <section className="roadmap" id="roadmap">
            <img className="roadmap-img" src="/img/roadmap.png" alt="roadmap" />
            <img className="roadmap-img-mobile" src="/img/roadmap-mobile.png" alt="roadmap-mobile" />
            <div className="container">
                <div className="roadmap-content">
                    <video className="roadmap-video top" playsInline controls={false} autoPlay muted loop>
                        <source src="/video/roadmap-palms.webm" type="video/mp4" />
                        <source src="/video/roadmap-palms.mp4" type="video/mp4" />
                    </video>
                    <h2 className="roadmap-title">Lionaire’s Roadmap</h2>
                    <p className="roadmap-text">Roar Through the Jungle Lionaire’s journey is more than a roadmap — it’s
                        a wild expedition through meme-powered markets and untamed possibilities. From the first roar to
                        full-on jungle domination, every phase unlocks new opportunities, bold moves, and unforgettable
                        moments for our pride.
                    </p>
                    <div className="roadmap-list">
                        <RoadmapItem
                            isFirst
                            isChecked
                            phase="Phase 1 (Q1 2025) "
                            title="Awakening the Jungle"
                            articleOne="• Define tokenomics and vision "
                            articleTwo="• Assemble the pride (devs, designers, meme masters)"
                            articleThree="• Create $LNR smart contract & mint genesis supply"
                        />
                        <RoadmapItem
                            isChecked
                            phase="Phase 2 (Q2 2025) "
                            title="Presale Roar"
                            articleOne="• Launch presale stages"
                            articleTwo="• Launch “Become a Lionaire” marketing campaign "
                            articleThree="• Integrate smart contracts and security features "
                        />
                        <RoadmapItem
                            isChecked
                            phase="Phase 3 (Q4 2025) "
                            title="The Jungle Awakens"
                            articleOne="• Token launch on major exchanges "
                            articleTwo="• Expand to CoinMarketCap & CoinGecko "
                            articleThree="• Launch community DAO: The Pride Council "
                        />
                        <RoadmapItem

                            phase="Phase 4 (Q1 2026) "
                            title="Claim the Throne"
                            articleOne="• CEX listings & strategic partnerships"
                            articleTwo="• Pride-themed staking vaults (roar in, earn more)"
                            articleThree="• Launch meme grant program (fund the funniest lions)"
                        />
                        <RoadmapItem
                            isLast
                            phase="Phase 5 (Q2 2026) "
                            title="Eternal Roar"
                            articleOne="• Launch Lionaireverse (interactive lore-driven platform) "
                            articleTwo="• Merch, comic series, and meme museum "
                            articleThree="• Collabs, community events, and global jungle expansion "
                        />
                    </div>
                    <video className="roadmap-video bottom" playsInline controls={false} autoPlay muted loop>
                        <source src="/video/roadmap-wave.webm" type="video/mp4" />
                        <source src="/video/roadmap-wave.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}