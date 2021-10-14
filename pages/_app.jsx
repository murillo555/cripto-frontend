import React, {useState,useEffect, useMemo} from "react"
import {useRouter} from 'next/router'
import jwtDecode from "jwt-decode";
import '../scss/index.scss';
import AuthContext from '../context/AuthContext';
import {ToastContainer} from "react-toastify";
import {getUserData} from '../api/users';
import {setToken, getToken, removeToken} from '../api/token';


function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router =  useRouter();

  //Detects if user is already log in
  useEffect(() => {
    const fetchData = async()=>{
      const token = await getToken();
      if(token){
        const response = await getUserData(token);
        const userData = await response.userData;
          if(userData){
          await setAuth({
              token,
              idUser:await jwtDecode(token).uid,
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              role: userData.role,
              participations: userData.participations,
              totalAmount: userData.totalAmount
            })
        }}else{
        setAuth(null);
        router.push('/login')
      }
      setReloadUser(false);
    }
    fetchData();
  }, [reloadUser]);

  //login Context
  const login = async(token) =>{
    const idUser = await jwtDecode(token).uid;
    const response = await getUserData(token);
    const userData = await response.userData;
    await setToken(token);
    if(userData){
      await setAuth({
        token,
        idUser,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        role: userData.role
      })
      router.push('/')
    }
  }
  //logout Context
  const logout = async()=>{
    if(auth){
      await removeToken();
      await setAuth(null);
      router.push('/login');
    }
  }

  //authData of Context
  const authData = useMemo(
    () =>({
      auth,
      login,
      logout,
      setReloadUser
    }),[auth]
  )
  
  if(auth === undefined) return null;


  return (
  <AuthContext.Provider value={authData}>
    <Component {...pageProps} />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover/>
  </AuthContext.Provider>
  )}

export default MyApp;