import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as FcIcons from 'react-icons/fc';
import * as TbIcons from 'react-icons/tb';
import * as HiIcons from 'react-icons/hi2';





export const SidebarData = [
  
  {
    title: 'Patient',
    path: '/patient',
    icon: <img src="/Image/2854581.png" className='imagesize'/>,
    cName: 'nav-textWithSubmenu',
    submenu:null,

    // submenu: [
    //   {
    //     title: 'Create',
    //     path: '/Patient',
    //     icon: <FaIcons.FaUserInjured color="#fff" />,
    //     cName: 'subnav-text'
    //   },
    // ]
  },
  {
    title: 'Doctor Profile',
    path: '/doctor',
    icon: <img src="/Image/2785482.png" className='imagesize'/>,
    cName: 'nav-textWithSubmenu',
    submenu:null,
    // submenu: [
    //   {
    //     title: 'Create',
    //     path: '/Doctor',
    //     icon: <FaIcons.FaUserMd color="#fff" />,
    //     cName: 'subnav-text'
    //   },
      // {
      //   title: 'List',
      //   path: '/Doctors',
      //   icon: <FaIcons.FaClipboardList color="#fff" />,
      //   cName: 'subnav-text'
      // }
    // ]
  },
 
  {
    title: 'Company',
    path: '/company',
    icon: <img src="/Image/9206846.png" className='imagesize'/>,
    cName: 'minnavtext',
    submenu: null
  },
  {
    title: 'Sites',
    path: '/sites',
    icon: <img src="/Image/4320371.png" className='imagesize'/>,
    cName: 'minnavtext',
    submenu: null
  },
  // {
  //   title: 'Staff',
  //   path: '/Staff',
  //   icon: <img src="/Image/4807695.png" className='imagesize'/>,
  //   cName: 'minnavtext',
  //   submenu: [
  //     {
  //       title: 'Create',
  //       path: '/staff',
  //       icon: <GiIcons.GiVendingMachine color="#fff" />,
  //       cName: 'subnav-text'
  //     },
  //     {
  //       title: 'List',
  //       path: '/staffList',
  //       icon: <FaIcons.FaClipboardList color="#fff" />,
  //       cName: 'subnav-text'
  //     }
  //   ]
  // },
  {
    title: 'Medicine',
    path: '/medicine',
    icon: <img src="/Image/4807695.png" className='imagesize'/>,
    cName: 'minnavtext',
    submenu: [
      {
        title: 'Create',
        path: '/medicine',
        icon: <GiIcons.GiVendingMachine color="#fff" />,
        cName: 'subnav-text'
      },
      {
        title: 'List',
        path: '/medicines',
        icon: <FaIcons.FaClipboardList color="#fff" />,
        cName: 'subnav-text'
      }
    ]
  },
  // {
  //   title: 'Prescription',
  //   path: '/Prescription',
  //   icon: <GiIcons.GiMedicines color="#fff" />,
  //   cName: 'minnavtext',
  //   submenu: null
  // },
  {
    title: 'Appointments',
    path: '/appointments',
    icon: <img src="/Image/3634820.png" className='imagesize'/>,
    cName: 'minnavtext',
    submenu:null,
  //   submenu: [
  //   {
  //     title: 'List',
  //     path: '/Appointments',
  //     icon: <GiIcons.GiMedallist color="#fff" />,
  //     cName: 'minnavtext',
  //     submenu: null
  //   },
  // ]
  },
  {
    title: 'Kiosk',
    path: '/kiosk',
    icon: <img src="/Image/2992083.png" className='imagesize'/>,
    cName: 'nav-text',
    submenu: null
    // submenu: [
    //   {
    //     title: 'Create',
    //     path: '/Kiosk',
    //     icon: <GiIcons.GiVendingMachine color="#fff" />,
    //     cName: 'subnav-text'
    //   },
    //   {
    //     title: 'List',
    //     path: '/Kiosks',
    //     icon: <FaIcons.FaClipboardList color="#fff" />,
    //     cName: 'subnav-text'
    //   }
    // ]
  },
  {
    title: 'Doctor Consultation',
    path: '/consultation',
    icon: <img src="/Image/cons.png" className='imagesize'/>,
    cName: 'nav-text',
    submenu: [
      {
        title: 'Dashboard',
        path: 'consultation/dashboard',
        icon: <GiIcons.GiVendingMachine color="#fff" />,
        cName: 'subnav-text'
      },
      {
        title: 'Consultation',
        path: 'consultation/session',
        icon: <FaIcons.FaClipboardList color="#fff" />,
        cName: 'subnav-text'
      }
    ]
  },

];
