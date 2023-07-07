import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';

const Panier = () => {
    return (
        <div className='panier-page'>
            <Navbar />
            <MenuBurger />
            <h1>Votre panier</h1>
        </div>
    )
}

export default Panier