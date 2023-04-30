import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import './nav.css'
import * as FaIcons from 'react-icons/fa';
import { Twirl as Hamburger } from 'hamburger-react'
const Navbar = () => {
const [open, setopen] = useState(false)
const isOpen =()=>{
    
    setopen(!open)
}

  return (
    <div className={!open ? 'navbar':'navbar navbarSmall'}>
        <div className='flex'>
           <div className={!open ? 'flexRow':'none'}>
           <FaIcons.FaUserCircle size={30} color='3772FF'/>
           <div className='name'>Name</div>
           </div>
            <Hamburger toggled={open} color='white' toggle={isOpen} />
        </div>
        <div className='list'>
      {SidebarData.map(item=>{
        return <li className={!open ? '':'noPadding'}> {item.icon}
        {!open ? 
        <span className='title'>{item.title}  </span>
        : '' }</li>
      })}
    </div>
    
    </div>
  )
}

export default Navbar
