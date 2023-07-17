import { Link } from 'react-router-dom';
import WineTasting from '../assets/wine-tasting.jpg';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';      
import Footer from '../components/Footer';
import '../styles/AtelierDegus.css'

const AtelierDegus = () => {
    return (
        <div className='atelier-degus-page'>
            <Navbar />
            <MenuBurger />
            <div className='atelier-degus-header'>
                <div className='atelier-degus-img'>
                    <img src={WineTasting} alt='Atelier degustation' />
                </div>
                <h1>Atelier Dégustation</h1> 
            </div>

            <p>Atelier dégustation de 4 vins a l'aveugle suivi d'accompagnement de Mets .
                Nos ateliers <span className='inovin'>INOVIN</span> sont conçus pour vous offrir une expérience inoubliable, alliant découverte, apprentissage et convivialité.
                Vous serez guidé par des experts passionnés et compétents, qui vous feront découvrir les secrets du vin. </p>
                
            <Link to="/inscription" className='inscription-btn'>S'inscrire</Link>
            
            <Footer />
        </div>
    )
}

export default AtelierDegus;