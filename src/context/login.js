import React, { useEffect, useState } from "react";
import superagent from "superagent";
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
export const LoginContext = React.createContext(); 
const API = 'https://super-doctors.herokuapp.com/signin';// .env

export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const[toggleLogIn , setToggle] = useState(false);
    const[toggSignUp , setSignUp] = useState(false);

    // initial render
    useEffect(() => {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const token = qs.get('token') || cookieToken || null;
        validateJwToken(token);
    }, []);
    
    const login = async (email, password) => {
        // console.log(email,'<------>', password);
        // {username: password} encoded
        //Basic base64(username:password)
        
        const encodedUsernameAndPassword =
            base64.encode(`${email}:${password}`);
            
        const response = await superagent.get(`${API}`)
            .set('authorization', `Basic ${encodedUsernameAndPassword}`)
            .set('Access-Control-Allow-Origin', '*');
            validateJwToken(response.body);

            let userData = JSON.stringify(response.body);
            localStorage.setItem("user" , userData)
            setToggle(false);

    },

     signUp =(user)=>{
         console.log("user ---> ",user);
        toggleLogInState();
    }
    

   const  validateJwToken = (user) => {
        if (user) {
            // the user is logged in
            setLoginState(true, user);


            cookie.save('token', user.user.token)
        } 
        // else {
        //     // the user is NOT logged in
        //     setLoginState(false, {});
        // }
    }
    
    const setLoginState = (loggedIn, user) => {
        setLoggedIn(loggedIn);
        setUser(user);

        // console.log(loggedIn,'<------->', user);
    }

    const logout = () => {
        window.location.href = "/";
        setLoginState(false, {});
        cookie.remove('token');
        localStorage.removeItem('user');
    }

    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    };

    const toggleLogInState = () =>{
        setToggle(true);
        setSignUp(false);

    }

    const toggleSignUpState = () =>{
        setSignUp(true);
        setToggle(true);
    }




    
    const state = {
        loggedIn,
        login,
        logout,
        user,
        can,
        toggleLogIn,
        toggleLogInState,
        toggleSignUpState,
        toggSignUp,
        signUp,
        setLoginState
    }

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}