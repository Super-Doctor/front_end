import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';
import RecordList from './RecordList';

export default function PatientsList() {
    const API = "https://super-doctors.herokuapp.com/doctorPatients";

    const Login = useContext(LoginContext);
    const [state, setstate] = useState(false);

    const [patientId, setPatient] = useState('');

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('user'))
        if (userData) {
            Login.setLoginState(true, userData);
            setstate(true);
        }

    }, []);
    const [recordsList, setRecords] = useState([]);

    useEffect(async () => {
        if (state) {
            const records = await axios.get(`${API}/${Login.user.user.id}`);
            // const record=`https://super-doctors.herokuapp.com/medicalinfos/${Login.user.user.id}`;
            // console.log(record.data);
            console.log("1- From Api---> ", records.data);

            setRecords([...recordsList, ...records.data]);
            console.log("2- recordsList---> ", records.data);
        }
    }, [state]);

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
                    <h1>Patients List</h1>
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
