import React, { useEffect, useState } from "react";
import superagent from "superagent";
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from "axios";
export const LoginContext = React.createContext(); 


const API = 'https://super-doctors.herokuapp.com/signin';// .env

export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const[toggleLogIn , setToggle] = useState(false);
    const[toggSignUp , setSignUp] = useState(false);
    const [userCapability, setuserCapability] = useState(1);




    // initial render
    useEffect(() => {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('token');
        const token = qs.get('token') || cookieToken || null;
        console.log("token From the first load : " , token);
        validateJwToken(token );
        const capability = cookie.load('capability');
        console.log(">>>>>>>>>>>>>>>>>>>",capability);
    if (capability) {
      setuserCapability(JSON.parse(capability));
    }
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
            console.log('response.body.user',response.body.capabilities.length);
            setuserCapability(response.body.capabilities.length);
            console.log(userCapability);
            cookie.save('capability', JSON.stringify(response.body.capabilities.length));

            validateJwToken(response.body.user.token , response.body);

            console.log('from logIn',response.body);

            // let userData = JSON.stringify(response.body);
            // localStorage.setItem("user" , userData)
            setToggle(false);
    


    },

     signUp =async (user)=>{
         const API = 'https://super-doctors.herokuapp.com'
         console.log("Sign Up User ---> ",user);
        //  "userName": "ghidaa",
        //  "email": "ghidaa@gmail.com",
        //  "password": "ghidaa",
        //  "roleId": 1,
        //   "gender" : "female"

        let userInfo = {
            userName : `${user.first} ${user.mid} ${user.last}`,
            email : user.email,
            password :user.password ,
            roleId : 1,
            gender : user. formHorizontalRadios,
        }

        console.log('userInfo',userInfo);

        let response ;
     await  axios
        .post(`${API}/signup` , userInfo)
  
        .then((res) => {
          console.log('SignUp : ',res.data);
          response = res.data.patient;
  
        })
        .catch((err) => {
          console.log(err);
        });
    

        let personalInfo = {
            patientId : response.id,
            address : user.address,
            phoneNumber : user.phone,
            secondaryNumber: user.secPhone,
            medicalHistory : "Null"
        }

        
        await  axios
        .post(`${API}/addInfo/patient` ,{ headers: {"Authorization" : `Bearer ${response.token}`} }, personalInfo)
        
  
        .then((res) => {
          console.log("Set Personal Info ",res.data);
  
        })
        .catch((err) => {
          console.log(err);
        });

    








        toggleLogInState();
    }
    

   const  validateJwToken = async (token,user) => {
        if (user) {
            // the user is logged in
            setLoginState(true, user);
            console.log('Token : ',token);

            cookie.save('token', token)
            
        } 
       else {
            // the user is NOT logged in
             const cookieToken = cookie.load('token');
             if(cookieToken) {
                 let userData = jwt.decode(cookieToken);
                 console.log('>>>>>>>>>>>>>.',userData);
                //  const response = await superagent.get(`https://super-doctors.herokuapp.com/roles`);

                //  let capabilities = response.body.filter(role=>{
                //      if (role.id == userData.roleId) {return true}
                //  })

                 let userFromToken = {
                    user: {
                                token: userData.token,
                                id:  userData.id,
                                userName: userData.userName,
                                email:  userData.email,
                                departmentId: userData.departmentId,
                                roleId:userData.roleId ,
                                gender: userData.gender
                              
                            } ,
                            capabilities:     userData.capabilities,
                            mediacalList:{
                                checkInDate: userData.checkInDate,
                                checkOutDate: userData.checkOutDate,
                                medicalCase: userData.medicalCase,
                                doctorName: userData.doctorName,
                                doctorReport: userData.doctorReport,
                                patientId: userData.doctorId,
                                doctorId:userData.doctorId,
                                departmentId:userData.departmentId,
                                status:userData.status
                            }

                 }

                 console.log('userFromToken : '  ,userFromToken.capabilities);
                //  const capability = cookie.load('capability');
                 const capability = userFromToken.capabilities;

                 console.log(">>>>>>>>>>>>>>>>>>>",capability);
             if (capability) {
                setLoginState(true, userFromToken);

               setuserCapability(JSON.parse(capability));
             }

             } else {
                setLoginState(false, null);

             }

        }
    }
    
    const setLoginState = (loggedIn, user) => {
        setLoggedIn(loggedIn);
        setUser(user);

        // console.log(loggedIn,'<------->', user);
    }

    const logout = () => {
        cookie.remove('token');
        setLoginState(false, null);
        window.location.href = "/";
       
     
        // localStorage.removeItem('user');
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
        setLoginState,
        userCapability,
         setuserCapability
    }

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}