import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import Footer from '../components/Footer'
import { IoMdArrowDropright } from 'react-icons/io'
import '../styles/Profil.css';

const Profil = () => {
    return (
        <div className='profil-page'>
            <Navbar />
            <MenuBurger />
            <h1>Votre profil</h1>
            <div className='profil-header'>
                <h2><span>John Doe</span></h2>
                <h3>34 ans</h3>
                <button>Modifier le profil</button>
            </div>
            
            <div className='options-container'>
                <div className='option-container'>
                    <Link to='/renseignement'><h2>Gérer les préférences</h2></Link> 
                    <Link to='/renseignement'><IoMdArrowDropright className='arrow-icon'/></Link>
                </div>

                <div className='option-container'>
                    <Link to=''><h2>Mes créations</h2></Link>
                    <Link to=''><IoMdArrowDropright className='arrow-icon'/></Link>
                </div>

                <div className='option-container'>
                    <h2>Ateliers</h2>
                    <ul className='signedup-ateliers-list'>
                        <li>Atelier Création 
                            <span>A venir : 18/08/2023</span>
                        </li>
                        <li>Atelier Dégustation 
                            <span>Date à venir</span>
                        </li>
                        <li>Atelier Dégustation 
                            <span>Passé : 21/05/2023</span>
                        </li>
                        <li className='more-ateliers-btn'>Voir plus...</li>
                    </ul>
                </div>
                <button className='logout-btn'>Se déconnecter</button>
            </div>
            <Footer />
        </div>
    )
}

export default Profil