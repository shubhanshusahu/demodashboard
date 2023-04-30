import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as FcIcons from 'react-icons/fc';
import * as TbIcons from 'react-icons/tb';
import * as HiIcons from 'react-icons/hi2';
import * as Rxicon from 'react-icons/rx';
import * as Goicons from 'react-icons/go';
import * as Ciicons from 'react-icons/ci';
import * as Cgicons from 'react-icons/cg';





let iconColor = '#fff'
let iconSize =25



export const SidebarData = [
  
  {
    title: 'Home',
    path: '/home',
    icon: <Rxicon.RxDashboard color={iconColor} size={iconSize} className='icon'/>,
    cName: 'nav-textWithSubmenu',
  },
  {
    title: 'Section1',
    path: '/Section1',
    icon: <Goicons.GoDashboard color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'nav-textWithSubmenu',
  },
 
  {
    title: 'Section 2',
    path: '/',
    icon: <Ciicons.CiPalette color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'minnavtext',
    submenu: null
  },
  {
    title: 'Section 3',
    path: '/Section 3',
    icon: <Ciicons.CiCloudMoon color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'minnavtext',
    submenu: null
  },
  {
    title: 'Section 4',
    path: '/Section 4',
    icon: <TbIcons.TbBrandNetbeans color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'minnavtext',
  },
  {
    title: 'Section 5',
    path: '/Section 5',
    icon: <TbIcons.TbBrandOffice color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'minnavtext',

  },
  {
    title: 'Section 6',
    path: '/Section 6',
    icon: <BsIcons.BsDatabaseSlash color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'nav-text',

  },
  {
    title: 'Section 7',
    path: '/',
    icon: <Cgicons.CgCast color={iconColor}size={iconSize}  className='icon'/>,
    cName: 'nav-text',

  },

];
