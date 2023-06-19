import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io'
import inovin_logo from '../assets/logo_inovin_blanc.png'
import '../styles/Navbar.css';

const Navbar = () => {

    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <NavLink to="/"><img src={inovin_logo} alt='logo inovin' /></NavLink>
            </div>
            <div className='nav-dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <span>Ateliers <IoMdArrowDropdown /> </span>
                {dropdownOpen && (
                    <div className='nav-ateliers'>
                    <NavLink to='/atelier-creation' className={splitLocation[1] === "atelier-creation" ? "active" : ""}>Création</NavLink>
                    <NavLink to='/atelier-degustation' className={splitLocation[1] === "atelier-degustation" ? "active" : ""}>Dégustation</NavLink>
                </div>
                )}
            </div>
            <NavLink to='/notre-histoire' className={splitLocation[1] === "notre-histoire" ? "active" : ""}>Notre Histoire</NavLink>
        </div>
    )
}

export default Navbar;