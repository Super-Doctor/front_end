import React, { useContext, useState, useEffect } from 'react'
import { When } from 'react-if';
import Chat from './Chat';
import { Button } from "react-bootstrap";
import { LoginContext } from '../../context/login';
import { io } from "socket.io-client";
import axios from 'axios';



export default function UsersList() {
    const Login = useContext(LoginContext);
    const [state, startChat] = useState(false);
    const [list, setList] = useState([]);
    const [reciver, setReciver] = useState();
    const [online , setonline] =  useState('');
    const socket = Login.socket;


    const API = 'https://super-doctors.herokuapp.com';

   if(Login.user) {
       socket.on('onlineState' , data=>{
           console.log(data , " Is Online");
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
                    array.push({ userName: user.user.userName, id: user.user.id })

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
        <>
            {Login.user &&
                <>
                {console.log('online From ' , online)}
                    <When condition={!state}>
                        <When condition={Login.user.user.roleId == 1} >
                            <div>
                                <h1>Doctors List</h1>

                                {list.map((doctor,idx) => {
                                    
                                       
                                        return (
                                      
                                            <li key={idx} className='online' onClick={()=>handlestartChat(doctor)}><span></span>{doctor.userName}</li>
                                        )
                                 
                                   
                                })}

                            </div>
                        </When>

                        <When condition={Login.user.user.roleId == 2}>
                            <div>
                                <h1>Patients List</h1>
                                {list.map((patient,idx) => {
                                   
                                        return (
                                            <li key={idx}  onClick={()=>handlestartChat(patient)}><span></span> {patient.userName}</li>
                                        )
                                    
                                  
                                })}



                            </div>
                        </When>
                    </When>

                    <When condition={state}>
                        <Button onClick={endChat}>Exit Chat</Button>
                        <Chat socket={socket} reciver = {reciver}/>
                    </When>
                </>

            }

        </>
    )
}
