import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import inovin_logo from '../../../assets/logo_inovin_noir.png';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
import { BiEuro } from 'react-icons/bi';


export const Sidebar = () => {

  const { pathname } = useLocation();
  const splitLocation = pathname.split('/');

  return(
    <div className='sidebar-container'>
        <div className='logo-container'>
        <NavLink to="/"><img src={inovin_logo} alt='logo inovin' /></NavLink>
      </div>
        <NavLink to='/admin/' className={splitLocation[1] === "dashboard" ? "active" : ""}><BiSolidDashboard className='Dashboard-icon'/>dashboard</NavLink>
        <NavLink to='/admin/userslist' className={splitLocation[1] === "userslist" ? "active" : ""}><FaUsers className='UsersList-icon'/>usersList</NavLink>
        <NavLink to='/admin/bottlecepage' className={splitLocation[1] === "bottlecepage" ? "active" : ""}><FaWineBottle className='BottleCepage-icon'/>bottleCepage</NavLink>
        <NavLink to="/admin/bottlesale" className={splitLocation[1] === "bottlesale" ? "active" : ""}><BiEuro className='BottleSale' />bottleSale</NavLink>
    </div>
  )
}


