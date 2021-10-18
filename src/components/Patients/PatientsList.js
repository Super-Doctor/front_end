import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';
import RecordList from './RecordList';

export default function PatientsList() {
    const API = "https://super-doctors.herokuapp.com/doctorPatients";

    const Login = useContext(LoginContext);
    const [patientId, setPatient] = useState('');

    const [recordsList, setRecords] = useState([]);

    useEffect(async () => {
        if(Login.user) {
            let records = await axios.get(`${API}/${Login.user.user.id}`);
            // console.log("1- From Api---> ", records.data);
    
            setRecords(records.data);
            // console.log("2- recordsList---> ", records.data);
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
                </>

            }
            {
                patientId == '' &&
                <div>
                  <h1 >Patients List</h1>
                    {recordsList.map((record) => {
                        return (
                            <li onClick={() => showRecord(`${record.patientId}`)} key={record.id}>{`Medical Case : ${record.medicalCase}    `} <span>{`  CheckIn Date : ${record.checkInDate}`}</span></li>

                        )
                    })}


                </div>
            }
        </>

    )
}
