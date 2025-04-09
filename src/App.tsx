import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Banner from './components/Banner.tsx';
import About from './components/About.tsx';
import Tokenomics from './components/Tokenomics.tsx';
import RoadMap from './components/RoadMap.tsx';

function App() {
    return <>
        <Header />
        <main>
            <Banner />
            <About />
            <Tokenomics/>
            <RoadMap/>
        </main>
        <Footer />
    </>;
}

export default App;
