import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';
import Table from 'react-bootstrap/Table'

export default function Appointments() {
    const API = "https://super-doctors.herokuapp.com";

    const Login = useContext(LoginContext);
  
    const [patientsList, setPatients] = useState([]);

    useEffect(async () => {
        // const patients123 = await axios.get(`${API}/${Login.user.user.id}`);
        console.log(Login);
        if(Login.user) {
            const patients = await axios.get(`${API}/AllAppointments/${Login.user.user.id}`);
            console.log("1- From Api---> ", patients.data);

            setPatients(patients.data);
            console.log("2- patientsList---> ", ...patientsList);
        }
    }, [Login.user]);

    async function deleteAppointment(id){
        console.log(id);
        const deleteLink = `${API}/deleteAppointments/${id.id}/delete-Appointments`

        const deletedApp = await axios.delete(deleteLink)

        console.log(deletedApp);
        // data => AppointmentsInformation => patientId
        let result = deletedApp.data.AppointmentsInformation.filter(appointment=>{
            if(appointment.doctorId === Login.user.user.id){
                return (appointment)
            }
        })
        setPatients(result)
    } 
    return (
        <div style={{marginTop:'100px',minHeight:'800px'}}>
            <h1 style = {{textAlign:'center'}}>Appointments List</h1>
            <Table style={{textAlign:"center"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {patientsList?.map((patient, idx) => {
                        return (

                            <tr key={patient.id}>
                                <td>{idx + 1}</td>
                                <td>{`${patient.patientName}`}</td>
                                <td>{`${patient.Date}`}</td>
                                <td><div onClick={() => deleteAppointment(patient)} ><span style = {{cursor:'pointer'}}>❌</span></div></td>

                            </tr>


                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
