// import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import six from '../slideimg/6.jpg'
import seven from '../slideimg/7.jpg'
import eight from '../slideimg/8.jpg'
import nine from '../slideimg/9.jpg'
import { CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/login';

export default function RecordList(props) {
    const API = "https://super-doctors.herokuapp.com/patientRecords";

    const Login = useContext(LoginContext);



    const [recordsPatientList, setRecordsPatientList] = useState({});

    useEffect(async () => {

        const recordsLists = await axios.get(`${API}/${props.patientId}`);
        // const record=`https://super-doctors.herokuapp.com/medicalinfos/${Login.user.user.id}`;
        console.log(recordsLists.data);

        setRecordsPatientList( recordsLists.data);
        console.log("2- From Api---> ", recordsLists.data);

    }, []);

    console.log('Before Return =====>',recordsPatientList)
    return (
        <>
            <h1>Patient Records</h1>
            <Button>Start Chat</Button>
        

            { recordsPatientList.patientRecords &&  
                <div>
                    {

                        recordsPatientList.patientRecords.map((record, index) => {

                            //    if(props.patientId==recordsList.patientId){
                            return (
                                <Card style={{ display: "inline-block" }} sx={{ maxWidth: 345 }} className='cardieB'>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image='https://thumbs.dreamstime.com/b/boy-girl-doctors-cartoon-characters-profession-s-costume-doctor-vector-illustration-male-female-doctors-cartoon-147440124.jpg'
                                            alt="eyes"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Name: { recordsPatientList.patientInfo.userName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Gender: { recordsPatientList.patientInfo.gender}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Doctor Report: {record.doctorReport}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Medical Case: {record.medicalCase}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                             
                                </Card>


                            )


                            //}
                        })
                    }




                </div>
            }
        </>

    )
}
