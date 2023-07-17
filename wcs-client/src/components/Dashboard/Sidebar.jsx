import React from 'react';
import '../../styles/Sidebar.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  
  return <div className ='Sidebar'>
    <ul className ='SidebarList'>
      {SidebarData.map((val, key)=> {
      return (
      <li key={key}>
        
            {/* <div id="icon">{val.icon}</div> */}
            <div id="title">{val.title}</div>
          </li>
        );
       })}
     </ul>
   </div>
  };


export default Sidebar