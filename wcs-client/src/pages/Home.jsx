import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger'; 
import Diapo from '../components/Diapo';     
import Footer from '../components/Footer';
import '../styles/Home.css';
import inovin_logo from '../assets/logo_inovin_noir.png';

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <MenuBurger />
            <Diapo />
                <div className='dashboard-img'>
                <img src={inovin_logo} alt='logo inovin' />
                </div>
            <h1>INOVIN</h1>
            <p>La région Lozérien est un joyau méconnu en France. Les Lozériens vivent du vin depuis des générations et leurs vignes sont plantées le long des Gorges de la Daluis, surplombant le Tarn. Cela leur permet de produire des raisins pleins de jus riches et d'arômes uniques. Chez INOVIN, ils veulent que vous créiez votre propre vin en choisissant les cépages que vous souhaitez planter, en prenant soin des vignes et en supervisant la production. Cette approche personnalisée de la viticulture offre aux participants une expérience insolite qui les accompagnera pendant des années.</p>
            <Footer />
        </div>
    )
}

export default Home;