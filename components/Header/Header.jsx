import React from 'react';
import Image from 'next/image'
import useAuth from "../../hooks/useAuth";

export default function Header () {
    const { auth } = useAuth();
    const Name = auth?.firstName + ' ' + auth?.lastName;
    return (
        <header className='nav-header bg-secondary'>
            <div className='mt-1'>
                <div className='nav-header_avatar d-flex flex-between'>
                    <div className='mt-3'>
                        <p className='text-white user-name'>{Name}</p>
                    </div>
                    <Image className='avatar' src="/default-user.jpg" alt='avatar' objectFit='inherit' width={50} height={50} /> 
                </div>
            </div>
        </header>
    );
}

