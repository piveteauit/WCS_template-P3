import inovin_logo from '../assets/logo_inovin_blanc.png'
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src={inovin_logo} alt='logo inovin' />
            </div>
        </div>
    )
}

export default Navbar;