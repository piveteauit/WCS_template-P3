import Navbar from '../components/Navbar';      
import Footer from '../components/Footer';
import '../styles/AtelierDegus.css'

const AtelierDegus = () => {
    return (
        <div className='atelier-degus-page'>
            <Navbar />
            <h1>Atelier Dégustation</h1>
            <p>Atelier dégustation de 4 vins a l'aveugle suivi d'accompagnement de Mets .
                Nos ateliers <span className='inovin'>INOVIN</span> sont conçus pour vous offrir une expérience inoubliable, alliant découverte, apprentissage et convivialité.
                Vous serez guidé par des experts passionnés et compétents, qui vous feront découvrir les secrets du vin. </p>
                
            <button className='inscription-btn'>S'inscrire</button>
            
            <Footer />
        </div>
    )
}

export default AtelierDegus;