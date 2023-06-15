import { NavLink, useLocation } from 'react-router-dom';
import inovin_logo from '../assets/logo_inovin_blanc.png'
import '../styles/Navbar.css';

const Navbar = () => {

    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');

    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src={inovin_logo} alt='logo inovin' />
            </div>
            <NavLink to='/atelier-creation' className={splitLocation[1] === "atelier-creation" ? "active" : ""}>Création</NavLink>
            <NavLink to='/atelier-degustation' className={splitLocation[1] === "atelier-degustation" ? "active" : ""}>Dégustation</NavLink>
            <NavLink to='/notre-histoire' className={splitLocation[1] === "notre-histoire" ? "active" : ""}>Notre Histoire</NavLink>
        </div>
    )
}

export default Navbar;