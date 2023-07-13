import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import Footer from '../components/Footer';
import '../styles/Creation.css';

const Creation = () => {
    return (
        <div className='creation-page'>
            <Navbar />
            <MenuBurger />
            <h1>Création de votre vin</h1>
            <div className='creation-header'>
                <h2>Guide</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam nam voluptatibus consequatur a repellat, quibusdam quia non voluptate? Doloribus sed sunt animi cum quam architecto corporis sequi eligendi quo.</p>
            </div>
            <div className='creation-container'>
                <h2>Dosage</h2>
                <h3>Bouteille par cépage</h3>
                <div className='bouteille-container'>
                    <p>Bouteille 1</p>
                    <p> /100</p>
                </div>
                <div className='bouteille-container'>
                    <p>Bouteille 2</p>
                    <p> /100</p>
                </div>
                <div className='bouteille-container'>
                    <p>Bouteille 3</p>
                    <p> /100</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Creation;