import SidebarItem from "./SidebarItem"
// import items from "./sidebar.json"
import {SidebarData} from './SidebarData'
import './Navbar.css'
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";



export default function Sidebar(props:any){
  // const [sidebar, setSidebar] = useState(props.side);
// const {sidebar}= useSelector((state:any)=> state.RootRed)
  // const showSidebar = () => setSidebar(!sidebar);
  // useEffect(() => {
  //   setSidebar(props.side)
  // }, [props.side])
const [sidebar, setsidebar] = useState(true)
    return (
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className={sidebar ? 'sidebar' : ' sidebar smallsidebar'}>
        {/* <Link to='/'>  */}
        <li className='navbar-toggle'>
              {sidebar ? <img src="https://medlyves-prod.me/register/static/media/Medlyves_logo.941dd19b.png" className="fulllogo" alt="logo" />

                :
                <img src="/Medlyveslogosmall.png" className="fulllogo" alt="logo" />}

            </li>
            {/* </Link> */}
          { SidebarData.map((item, index) => <SidebarItem sidebar={props.side} key={index} item={item} />) }
         </div>
        </nav>
    )
}