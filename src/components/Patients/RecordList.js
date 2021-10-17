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
    const [state, setstate] = useState(false);

    const [recordsList, setrecordsList] = useState([]);

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('user'))
        if (userData) {
            Login.setLoginState(true, userData);
            setstate(true);
        }

    }, []);
    const [recordsPatientList, setRecordsPatientList] = useState([]);

    useEffect(async () => {
        if (state) {
            const recordsLists = await axios.get(`${API}/${props.patientId}`);
            // const record=`https://super-doctors.herokuapp.com/medicalinfos/${Login.user.user.id}`;
            console.log(recordsLists.data);
            console.log("1- From Api---> ", recordsLists);

            setRecordsPatientList([...recordsPatientList, recordsLists.data]);
            console.log("2- recordsList---> ", recordsLists.data);
        }
    }, [state]);

   


    return (
        <>
            {/* {patientId != '' &&
                <>
                    <RecordList  patientId={patientId} />
                </>

            } */}
            {
                <div>
                    {

    recordsPatientList.map((record,index)=>{
       
    //    if(props.patientId==recordsList.patientId){
           return(
            <Card style={{display:"inline-block"}}sx={{ maxWidth: 345 }} className='cardieB'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image='https://thumbs.dreamstime.com/b/boy-girl-doctors-cartoon-characters-profession-s-costume-doctor-vector-illustration-male-female-doctors-cartoon-147440124.jpg'
                    alt="eyes"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       Name: {record.patientInfo.userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   Gender: {record.patientInfo.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Doctor Report: {record.patientRecords[0].doctorReport}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Medical Case: {record.patientRecords[0].medicalCase}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Read More
                </Button>
            </CardActions> */}
        </Card>


           )


       //}
    })
}
                    <h1>Patients List</h1>
                    {/* {this.props.patientId.map((record) => {
                        return (
                            <li  key={record.id}>{`Name : ${record.doctorName}    `} <span>{`   Date : ${record.checkInDate}`}</span></li>

                        )
                    })} */}


                </div>
            }
        </>

    )
}











// class RecordList extends React.Component {
//     constructor(props) {
//         super(props)
       
//     }


//     render() {
//         return (
//             <div>
//                 {/* <h1>{this.props.patientId}</h1> */}
   

                
//             {

//                 this.props.users.map((doctor,index)=>{
//                    if(this.props.doctorId==this.props.depType){
//                        return(
//                         <Card style={{display:"inline-block"}}sx={{ maxWidth: 345 }} className='cardieB'>
//                         <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 height="300"
//                                 image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mDcL0xvdWU9s0ENNJFFE2tkIsZYHZj5stQ&usqp=CAU'
//                                 alt="eyes"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                    Name: {doctor.doctorName}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                 Medical Case: {doctor.medicalCase}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                Status: {doctor.status}
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
//                         <CardActions>
//                             <Button size="small" color="primary">
//                                 Read More
//                             </Button>
//                         </CardActions>
//                     </Card>


//                        )


//                    }
//                 })
//             }
            
//             </div>

//         )
//     }
// }

// export default RecordList
