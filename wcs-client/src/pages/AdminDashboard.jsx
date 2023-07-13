import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import UserList from '../components/Dashboard/UserList';
import BottleCepage from '../components/Dashboard/BottleCepage';
import BottleSale from '../components/Dashboard/BottleSale';

function AdminDashboard() {
  return (
    <div>
        
            <Routes>
               <Route path='/' element={<Sidebar />} />
               <Route path='/users' element={<UserList />} />
               <Route path='/bottleCepage' element={<BottleCepage />} />
               <Route path='/bottleSale' element={<BottleSale />} />
            </Routes>
         

    </div>
  )
}

export default AdminDashboard