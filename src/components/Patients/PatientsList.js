import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';
import RecordList from './RecordList';
import { Button, Card, Elevation } from "@blueprintjs/core";
import './patients.css'
import AddModal from './AddModal';
// import Table from 'react-bootstrap/Table'
export default function PatientsList() {
    const API = "https://super-doctors.herokuapp.com/doctorPatients";
    const APIForAllPatient = 'https://super-doctors.herokuapp.com/allpatients'
    const Login = useContext(LoginContext);
    const [patientId, setPatient] = useState('');
    const [recordsList, setRecords] = useState([]);
    const [AllPatients, setAllPatients] = useState([]);
    const [formatted, setFormatted] = useState([]);
    useEffect(async () => {
        if (Login.user) {
            let records = await axios.get(`${API}/${Login.user.user.id}`);
            //console.log("1- From Api---> ", records.data);
            let Patients = await axios.get(APIForAllPatient)
            setRecords(records.data);
            let data = Patients.data.map(user => {
                return ({
                    userName: user.user.userName,
                    id: user.user.id
                })
            })
            console.log('data ', data);
            //setAllPatients(data)
            setFormatted(data)
            //console.log('patients list',Patients.data);
            console.log("2- recordsList---> ", records.data);
            return true;
        }


    }, [Login.user]);


    function showRecord(patientId) {
        setPatient(patientId)
        console.log(patientId);
    }



    return (
        <>
            {patientId != '' &&
                <>
                    <RecordList users={recordsList} patientId={patientId} />
                    <AddModal users={recordsList} doctorId={patientId}></AddModal>
                </>

            }
            {
                patientId == '' &&
                <div>



                    <h1 >Patients List</h1>
                    {recordsList.map((record, idx) => {
                        return (
                           <Card  style={{textAlign:"center"}} striped bordered hover onClick={() => showRecord(`${record.patientId}`)} key={record.id} className='patientsCard' >
                                 {/* <thead> */}
                                    <h5> {formatted.map(user => {
                                        if (user.id == record.patientId) {
                                            // return (
                                            
                                            //     <tr scope="col">
                                                    
                                                    
                                            //          <td scope="col">Patient Name :</td> 
                                                     
                                            //          <td scope="col">  {`${user.userName}`}</td> 
                                                     
                                                     
                                            //           </tr>
                                                
                                                
                                                
                                            //     )
                                            
                                            return (<><span>{` Patient Name : ${user.userName}  `}</span>
                                            <h6>{`Patient ID : ${user.id}`}</h6>
                                            </>)
                                        }
                                        
                                    })}</h5>
                                    {/* </thead> */}
                                    {/* <tbody>

                                    <tr scope="col">

                                    <td scope="col">CheckIn Date :</td>
                                    <td scope="col"> {`${record.checkInDate}`}</td>
                                 
                                    </tr> */}


   {/* <tr scope="col"> */}
                                    {/* <td scope="col"> Medical Case :</td> */}
                                    
                                    
                                  {/* <td scope="col">    {`${record.medicalCase}`}</td> */}

                                    {/* })}</h5> */}
                                     <p>{`Doctor ID : ${record.doctorId}`}</p>
                                    <p>{`CheckIn Date : ${record.checkInDate}`}</p>
                                    <p>{`Medical Case : ${record.medicalCase}`}</p>

                                    {/* </tr> */}
                                    {/* </tbody> */}
                                    <button>Submit</button>
                                  </Card> 
                        )
                    })}


                </div>
            }




        </>

    )
}


