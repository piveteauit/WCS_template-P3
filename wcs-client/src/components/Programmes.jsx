import { Link } from 'react-router-dom';
import '../styles/Programmes.css'

const Programmes = () => {
    return (
        <div className='programmes-container'>
            <div className='atelier-card'>
                <div className='card-details'>
                    <h3>Atelier création</h3>
                    <p className='atelier-price'>70,00 €</p>
                    <p className='atelier-description'>Atelier INOVIN pour créer votre propre vin personnalisé.
                        Notre atelier INOVIN est unique en son genre : vous apprendrez à créer votre propre vin en sélectionnant les arômes et les saveurs que vous préférez.</p>
                </div>
                <Link to='/atelier-creation' className='atelier-card-btn'>En savoir plus</Link>
            </div>
            <div className='atelier-card'>
                <div className='card-details'>
                    <h3>Atelier dégustation</h3>
                    <p className='atelier-price'><span>50,00 €</span> 30, 00€</p>
                    <p className='atelier-description'>Atelier dégustation de 4 vins a l'aveugle suivi d'accompagnement de Mets.
                        Vous serez guidé par des experts passionnés et compétents, qui vous feront découvrir les secrets du vin.</p>
                </div>
                <Link to='/atelier-degustation' className='atelier-card-btn'>En savoir plus</Link>
            </div>
        </div>
    )
}

export default Programmes;