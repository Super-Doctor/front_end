import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';

export default function PatientsList() {
    const API = "https://super-doctors.herokuapp.com/AllAppointments";

    const Login = useContext(LoginContext);
    const [state, setstate] = useState(false);


    // useEffect(() => {
    //     let userData = JSON.parse(localStorage.getItem('user'))
    //     if (userData) {
    //         Login.setLoginState(true, userData);
    //         setstate(true);
    //     }

    // }, []);
    const [patientsList, setPatients] = useState([]);

    useEffect(async () => {
        if (state) {
            const patients = await axios.get(`${API}/${Login.user.user.id}`);
            console.log("1- From Api---> ", patients.data);

            setPatients([...patientsList, ...patients.data]);
            console.log("2- patientsList---> ", ...patientsList);
        }
    }, [state]);

    return (
        <div>
            <h1>Patients List</h1>
            {patientsList.map((patient) => {
                return (
                    <li key = {patient.id}>{`Name : ${patient.patientName}    `} <span>{`   Date : ${patient.Date}`}</span></li> 

                )
            })}
        </div>
    )
}
