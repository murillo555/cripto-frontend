import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useAuth from "../../hooks/useAuth";

export default function NavBar() {
    const collapseNavBar = () => {
        var menu_btn = document.querySelector("#collapse-button")
        var sidebar = document.querySelector("#sidebar")
        var container = document.querySelector('.admin-content')
        var items = document.querySelector('.toggler-menu')

        menu_btn.addEventListener("click", () =>{
            sidebar.classList.toggle("active-menu")
            container.classList.toggle("active-content")
            items.classList.toggle("active-toggler-menu")
        })
    }
    const { logout, auth } = useAuth();
    return (
        <div className='NavbarComponent'>
            <nav className="navbar navbar-expand-md d-flex flex-column navbar-color" id="sidebar">
                <div className='d-flex flex-between flex-row'>
                    <div>
                        <a href='#' className=''>
                            <div className='text-center'>
                                <div className='position-image'>
                                    <Image  className='logo-style' src="/app-logo.png" quality={100} height={50} width={50} objectFit='inherit' alt='logo'/>
                                </div>
                                <span className="text-light mt-3 nuser">{auth?.role?.role}</span>
                            </div>
                        </a>
                    </div>
                    <div className=''>
                        <button className='btn header-button' id="collapse-button" onClick={collapseNavBar}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>       
                </div>
                <hr className="border w-100"/>
                <ul className='navbar-nav d-flex toggler-menu flex-column mt-2 w-100'>
                    <NavItem text={'Dashboards'} route={'/'} icon={'bi bi-clipboard-data'}/> 
                    <NavItem text={'Invertir'} route={'/invertir'} icon={'bi bi-person'}/>
                    <li className='nav-item w-100 logout-option' onClick={()=>logout()}>
                        <a className='nav-link text-light'>
                            <i className="bi bi-box-arrow-left mx-3"></i>
                            Log Out
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

const NavItem = (props) =>{  
    const {text, route, icon} = props;
    return(
        <li className='nav-item w-100'>
            <Link href={route}>
                <a className='nav-link text-light'>
                    <i className={`${icon} mx-3`}></i>
                    {text}
                </a>
            </Link>
        </li>
    )
}