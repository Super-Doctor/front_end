import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';
import RecordList from './RecordList';

import { Button, Card, Elevation }  from  'react-bootstrap'
// import { Button, Card, Elevation } from "@blueprintjs/core";
import './patients.css'
import AddModal from './AddModal';
import { Row ,Col } from 'react-bootstrap';
import { fontWeight } from '@mui/system';
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
            console.log("1- From Api---> ", records.data);
            let Patients = await axios.get(APIForAllPatient);

            setRecords(records.data);
            let data = Patients.data.map(user => {
                return ({
                    userName: user.user.userName,
                    id: user.user.id
                })
            })
            // console.log('data ', data);
            //setAllPatients(data)
            setFormatted(data)
            //console.log('patients list',Patients.data);
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
                    <AddModal users={recordsList} doctorId={patientId}></AddModal>
                </>

            }
            {
                patientId == '' &&
                <>

                    <h1 style={{textAlign:"center" ,color:'#56749E'}}>Patients List</h1>
                    {recordsList.map((record, idx) => {
                        return (
                           <span style={{textAlign:"center"}} striped bordered hover onClick={() => showRecord(`${record.patientId}`)} key={record.id}  >
                           
                                    {formatted.map(user => {
                                        if (user.id == record.patientId) {
                                            
                                            return (
                                            //     <Card style={{ width: '18rem' }}>
                                               
                                            //     <Card.Body>
                                            //       <Card.Title>Card Title</Card.Title>
                                            //       <Card.Text>
                                            //         Some quick example text to build on the card title and make up the bulk of
                                            //         the card's content.
                                            //       </Card.Text>
                                            //       <Button variant="primary">Go somewhere</Button>
                                            //     </Card.Body>
                                            //   </Card>          
                                            <>
                                            <Row sm={3} style={{display: 'inline-flex'}}>
                                                <Col sm={3}>
                                    <Card style={{ width: '450px' }} className='patientsCard' >
                                    {/* <Card.Img variant="top"style={{ width: '100%',borderRadius: '15px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHctWizTzr1CJyuMxCPtqxPdYoXD03Ezf-OQ&usqp=CAU" /> */}
                                 
                                 <Card.Title>  {`PatientName: ${user.userName}`}</Card.Title>
                                 
                                     <Card.Text style={{fontFamily:'sans-serif',color:'#33516F' ,fontWeight:'bolder'   ,boxSizing:'content-box' ,textAlign:'center' }}>      {`Patient ID: (${user.id})`} </Card.Text>

                                    <Card.Text style={{fontFamily:'sans-serif',color:'#33516F' ,fontWeight:'bolder',textAlign:'center', boxSizing:'content-box'}}>  {`Doctor ID: (${record.doctorId})`} </Card.Text>
                                   <Card.Text style={{fontFamily:'sans-serif', color:'#33516F',fontWeight:'bolder',textAlign:'center',boxSizing:'content-box'}}> {`CheckIn Date: ${record.checkInDate}`} </Card.Text>
                                  <Card.Text style={{ fontFamily:'sans-serif',color:'#33516F' ,fontWeight:'bolder',textAlign:'center',boxSizing:'content-box'}}>  {`Medical Case: ${record.medicalCase}`}</Card.Text>

                                 {/* <Button>Submit</Button> */}
                                 
                                  </Card>
                                  </Col>
                                  </Row>
                                            </>)
                                     }
                                        
                                    })}
           
                              
                           
                                 
                                 
                                    </span> 
                                    
                                   
                        )
                    })}

                    
                                  
                </>
            }




        </>

    )
}


