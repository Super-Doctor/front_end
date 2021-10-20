import React, { useContext, useState, useEffect } from 'react'
import { When } from 'react-if';
import Chat from './Chat';
import { Button } from "react-bootstrap";
import { LoginContext } from '../../context/login';
import { io } from "socket.io-client";
import axios from 'axios';
import './list.css'


export default function UsersList() {
    const Login = useContext(LoginContext);
    const [state, startChat] = useState(false);
    const [list, setList] = useState([]);
    const [reciver, setReciver] = useState();
    const [online, setonline] = useState('');
    const socket = Login.socket;


    const API = 'https://super-doctors.herokuapp.com';

    if (Login.user) {
        socket.on('onlineState', data => {
            console.log(data, " Is Online");
            setonline(data)

        })
    }

    // let socket = io.connect('http://localhost:3001', { transports: ['websocket'] });

    useEffect(async () => {
        let array = [];
        if (Login.user) {
            //If Doctor
            if (Login.user.user.roleId == 2) {
                // const recordsLists = await axios.get(`${API}/doctorPatients/${Login.user.user.id}`);
                // console.log('Doctor View ------->', recordsLists.data);

                const Patients = await axios.get(`${API}/allpatients`);
                console.log('Patients ------->', Patients.data);

                Patients.data.map(user => {

                    array.push({ userName: user.user.userName, id: user.user.id })

                    // recordsLists.data.map(record => {
                    //     if (user.user.id == record.patientId) {

                    //         array.push({ userName: user.user.userName, id: user.user.id })

                    //     }
                    // })
                })
            }
            //If Patient
            if (Login.user.user.roleId == 1) {
                // const recordsLists = await axios.get(`${API}/patientRecords/${Login.user.user.id}`);
                // console.log('Patient View ------->', recordsLists.data);

                const Doctors = await axios.get(`${API}/alldoctors`);
                console.log('Patients ------->', Doctors.data);

                Doctors.data.map(user => {
                    array.push({ userName: user.user.userName, id: user.user.id, department: user.user.departmentId })

                    // recordsLists.data.patientRecords.map(record => {
                    //     if (user.user.id == record.doctorId) {

                    //         array.push({ userName: user.user.userName, id: user.user.id })
                    //     }
                    // })
                })
            }
        }


        setList([...list, ...array])


    }, [Login.user]);


    const handlestartChat = (reciverBody) => {
        startChat(true);
        setReciver(reciverBody);
        console.log(io);
        socket.emit("join-room", 5, Login.user.user.userName);

        socket.emit("change_userName", { userName: Login.user.user.userName });
    }

    const endChat = () => {
        startChat(false);

        socket.emit("disconnected", Login.user.user.userName);
    }



    return (
        <div id='usersList'>
            {Login.user &&
                <>
                    {console.log('online From ', online)}
                    <When condition={!state}>
                        <When condition={Login.user.user.roleId == 1} >
                            <div className='list'>
                                <h1>Doctors List</h1>
                                <div className="names">
                                    {list.map((doctor, idx) => {


                                        return (

                                            <li key={idx} className='online' onClick={() => handlestartChat(doctor)}>
                                                <span id="name">Name : Dr. {(doctor.userName).toUpperCase()}</span>
                                                <span id="department">Department : {doctor.department}</span>
                                                <span><img src="https://img.icons8.com/windows/32/000000/chat-message.png" /></span>
                                            </li>
                                        )


                                    })}
                                </div>

                            </div>
                        </When>

                        <When condition={Login.user.user.roleId == 2}>
                            <div className='list'>
                                <h1>Patients List</h1>
                                <div className="namespatient">
                                    {list.map((patient, idx) => {

                                        return (
                                            <li key={idx} onClick={() => handlestartChat(patient)}>
                                                <span>{(patient.userName).toUpperCase()}</span> 
                                            <span>
                                                <img src="https://img.icons8.com/windows/32/000000/chat-message.png" />
                                                </span>
                                            </li>
                                        )


                                    })}


                                </div>
                            </div>
                        </When>
                    </When>

                    <When condition={state}>
                     
                        <Chat socket={socket} reciver={reciver} endChat={endChat} />
                    </When>
                </>

            }

        </div>
    )
}
