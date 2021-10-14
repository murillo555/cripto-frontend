import React from 'react';;
import NavBar from '../../components/NavBar/'
import Header from '../../components/Header'
export default function adminLayout ({children}) {
    return (
        <>
            <div className='admin-layout'>
                <Header/>
                <NavBar/>
                <div className='admin-content container-fluid'>
                    {children}
                </div>
            </div>
        </>
    );
}


