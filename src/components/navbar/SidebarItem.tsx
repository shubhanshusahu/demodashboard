import { useEffect, useState } from "react"
import './Navbar.css'
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import Tooltip from '../tooltip';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';
export default function SidebarItem(props:any){
    const [open, setOpen] = useState(false)
    const [sidebar, setsidebar] = useState(true)
    let device ='desktop'
    // const {sidebar,device}= useSelector((state:any)=> state.RootRed)
    if(props.item.submenu){
        
        return (
            
            <div className={open ? "sidebar-item open" : "sidebar-item "}>
                <div className="sidebar-title" onClick={() => {
                    
                    setOpen(!open)}}>
                    <span className="sidebar-item plain">
                    {device==='mobile' && sidebar === false ? '' : props.item.icon} 
                        {sidebar ? <span className="mintitle">{props.item.title}</span> : ''}   
                    </span> 
                   
                 <div className="bi-chevron-down toggle-btn" ><IoIcons.IoMdArrowDropright  color="#eee" /></div>
                </div>
                <div className="sidebar-content sidebaropencont">
                    { props.item.submenu.map((child:any, index:any) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <Link to={props.item.path} className="sidebar-item plain">
             {device==='mobile' && sidebar === false ? '' : props.item.icon}
                {sidebar ? <span className={"opentitle " + props.item.cName}>{props.item.title}</span> : ''}   
            </Link>
        )
    }
}
function Link(to: any,Children: any){
    return <>
    {Children}</>
}