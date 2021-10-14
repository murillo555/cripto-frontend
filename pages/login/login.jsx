import React,{useEffect} from 'react';
import LoginForm from '../../components/LoginForm'
import Image from 'next/image'
import {useRouter} from 'next/router';
import useAuth from "../../hooks/useAuth";


export default function Login() {
    const {auth} = useAuth();
    const router =  useRouter();

    useEffect(() => {
        if(auth) {
            //router.push('/'); 
            console.log(auth)
        }
    }, []);

    return (
        <div className='login'>
            <div className='login_content'>
                <div className='row login_card'>
                    <div className='col-md-12  col-lg-6 col-xl-7 col-sm-12 p-0 login_logo'>
                        <div className='w-100 h-100'>
                            <Image 
                                quality={100} 
                                height='100%'  
                                width='100%' 
                                layout="responsive" 
                                objectFit="fill"  
                                alt='logo-xl' 
                                src="/app-logo-xl.jpg"/>
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-6 col-xl-5 col-sm-12 mt-0'>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
