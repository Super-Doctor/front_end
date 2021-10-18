import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';

export default function Appointments() {
    const API = "https://super-doctors.herokuapp.com/AllAppointments";

    const Login = useContext(LoginContext);
  
    const [patientsList, setPatients] = useState([]);

    useEffect(async () => {
        if(Login.user) {
            const patients = await axios.get(`${API}/${Login.user.user.id}`);
            console.log("1- From Api---> ", patients.data);

            setPatients(patients.data);
            console.log("2- patientsList---> ", ...patientsList);
        }
    }, [Login.user]);

    return (
        <div>
            <h1>Appointments List</h1>
            {patientsList.map((patient) => {
                return (
                    <li key = {patient.id}>{`Name : ${patient.patientName}    `} <span>{`   Date : ${patient.Date}`}</span></li> 

                )
            })}
        </div>
    )
}
