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
                Vous serez guidé par des experts passionnés et compétents, qui vous feront découvrir les secrets du vin.
                Nous proposons notre atelier <span className='inovin'>INOVIN</span> pour :
                <ul>
                    <li>Des événements d'entreprise,</li>
                    <li>Des séminaires,</li>
                    <li>Pour des amateurs souhaitant en apprendre davantage sur l'art de déguster.</li>
                </ul>
                Nos ateliers <span className='inovin'>INOVIN</span> sont adaptés à tous.
                Alors, prêts ? N'hésitez pas à nous contacter pour en savoir davantage sur notre offre <span className='inovin'>INOVIN</span> !</p>
            <button className='inscription-btn'>S'inscrire</button>
            
            <Footer />
        </div>
    )
}

export default AtelierDegus;