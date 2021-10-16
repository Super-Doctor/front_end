import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../context/login";
export default function Profile() {

    const Login = useContext(LoginContext)
    useEffect(() => {
      let userData = JSON.parse(localStorage.getItem('user'))
      if (userData) {
        Login.setLoginState(true, userData)
      }
  
    }, []);


    return (
        <div>
            <h1>Profile</h1>
           <h3>{Login.user.user.userName}</h3>
           <h3>{Login.user.user.email}</h3>
           <h3>{Login.user.user.gender}</h3>
           <h3>{Login.user.user.departmentId}</h3>

        </div>
    )
}
