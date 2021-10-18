import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Button, CardActionArea, CardActions } from '@mui/material';
import All from './All'

// import Modals from './model'

// background-color: #75B8C8


// style={{ width: '90%',margin:'5%', height:'20%',position:'relative'  ,backgroundColor:'rgb(112 160 156)',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
//   <Card.Img  className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoNVjLQu0m3gohs0vugCuTkGWIsa-DZJE_A&usqp=CAU" />
//   <Card.Body style={{width:'50%' ,padding:'0px'}}>
//     <Card.Title style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>Bone</Card.Title>
//     <Card.Text style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}></Card.Text>




export default function Departments() {
    const [depType, setDepType] = useState('');
    const [show, setShow] = useState(false);

    const [users, setusers] = useState([]);
    useEffect(() => {
        let userData;
        axios.get('https://super-doctors.herokuapp.com/alldoctors')

            .then(res => {
                setusers(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    function myDepartment(dep) {
        setDepType(dep)
    }



    const [departments, setdepartments] = useState([]);
    useEffect(() => {
        let departmentData = [];
        axios.get('https://super-doctors.herokuapp.com/allDepartment')
            .then(res => {

                setdepartments(res.data.AllDepartment)
                // departmentData.push(res.data.AllDepartment)
                // console.log(departmentData);
                console.log(res.data.AllDepartment);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])





    return (

        <>

            {depType === 'Eyes' &&

                <>
                    <h2> Eyes </h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Skin' &&
                <>
                    {/* <button>Skin</button> */}
                    <h2> Skin </h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Bones' &&
                <>
                    <h2> Bones </h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Heart' &&
                <>
                    <h2> Heart </h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Children' &&
                <>
                    <h2> Children </h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Kidney' &&
                <>
                    <h2> Kidney </h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === '' &&

                <div className='homeCards'>


                    {departments.map((department, idx) => {
                        if (departments[idx].id == 'Eyes') {

                            return (

                                <Card onClick={() => myDepartment('Eyes')} sx={{ maxWidth: 345 }} className='cardieB' style={{ width: '90%', margin: '5%', height: '20%', position: 'relative', backgroundColor: '#75B8C8', color: 'white', boxShadow: ' rgb(136 136 136) 1px 2px 15px 2px' }}>
                                    <CardActionArea>
                                        <CardMedia style={{ width: '100%' }}
                                            component="img"
                                            // height="50%"
                                            // width="60%"

                                            image='https://bhtclinic.com.tr/wp-content/uploads/2019/07/goz-sagligi-ve-hastaliklari.jpg'
                                            alt="eyes"
                                        />
                                        <CardContent style={{ overflowY: 'scroll' }}>
                                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: '57px' }}>
                                                {department.departmentType} Department
                                            </Typography>
                                            <Typography variant="body2" style={{ color: "whitesmoke" }}>

                                                <h5> A branch of medicine and surgery that deals with the diagnosis and treatment of disorders of the eye. An ophthalmologist is a physician who specializes in ophthalmology.</h5>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4> Department_Chief :
                                                    {department.leaderName}</h4>

                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Days: {department.workingDays}</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Hours: {department.workingHours} hours a day</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>   phone_Number: {department.phoneNumber}</h4>

                                            </Typography>





                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            )
                        }


                    }
                    )}
                    {departments.map((department, idx) => {
                        if (departments[idx].id == 'Skin') {

                            return (

                                <Card onClick={() => myDepartment('Skin')} sx={{ maxWidth: 345 }} className='cardieB' style={{ width: '50%', margin: '5%', height: '20%', position: 'relative', backgroundColor: '#75B8C8', color: 'white', boxShadow: ' rgb(136 136 136) 1px 2px 15px 2px' }}>
                                    <CardActionArea>
                                        <CardMedia style={{ width: '100%' }}
                                            component="img"
                                            // height="40%"
                                            // width="40%"

                                            image='https://www.ashahospital.co.in/wp-content/uploads/2015/08/1.jpg'
                                            alt="eyes"
                                        />
                                        <CardContent style={{ overflowY: 'scroll' }}>
                                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: '57px' }}>
                                                {department.departmentType} Department
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                                <h5>Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems.</h5>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4> Department_Chief :
                                                    {department.leaderName}</h4>

                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Days: {department.workingDays}</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Hours: {department.workingHours} hours a day</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>   phone_Number: {department.phoneNumber}</h4>

                                            </Typography>





                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            )
                        }


                    }
                    )}

                    {departments.map((department, idx) => {
                        if (departments[idx].id == 'Bones') {

                            return (

                                <Card onClick={() => myDepartment('Bones')} sx={{ maxWidth: 345 }} className='cardieB' style={{ width: '90%', margin: '5%', height: '20%', position: 'relative', backgroundColor: '#75B8C8', color: 'white', boxShadow: ' rgb(136 136 136) 1px 2px 15px 2px' }}>
                                    <CardActionArea>
                                        <CardMedia style={{ width: '100%', height: '50%' }}
                                            component="img"
                                            // height="40%"
                                            // width="40%"

                                            image='https://www.pacificmedicalsciences.ac.in/img/Departments/PageImage/Orthopedic_Dpage.png'

                                            alt="eyes"
                                        />
                                        <CardContent style={{ overflowY: 'scroll' }}>
                                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: '57px' }}>
                                                {department.departmentType} Department
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" display='s' >

                                                <h5> Orthopaedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. Orthopaedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumors, and congenital disorders.</h5>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4> Department_Chief :
                                                    {department.leaderName}</h4>

                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Days: {department.workingDays}</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Hours: {department.workingHours} hours a day</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>   phone_Number: {department.phoneNumber}</h4>

                                            </Typography>





                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            )
                        }


                    }
                    )}

                    {departments.map((department, idx) => {
                        if (departments[idx].id == 'Kidney') {

                            return (

                                <Card onClick={() => myDepartment('Kidney')} sx={{ maxWidth: 345 }} className='cardieB' style={{ width: '90%', margin: '5%', height: '20%', position: 'relative', backgroundColor: '#75B8C8', color: 'white', boxShadow: ' rgb(136 136 136) 1px 2px 15px 2px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="40%"
                                            width="40%"

                                            image='https://vinnhospital.com/wp-content/uploads/2018/06/NEPHROLOGY-DEPARTMENT-inner.jpg'

                                            alt="eyes"
                                        />
                                        <CardContent style={{ overflowY: 'scroll' }}>
                                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: '57px' }}>
                                                {department.departmentType} Department
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                                <h5> Nephrology is a specialty of adult internal medicine and pediatric medicine that concerns the study of the kidneys, specifically normal kidney function (renal physiology) and kidney disease (renal pathophysiology), the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy (dialysis and kidney transplantation).</h5>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4> Department_Chief :
                                                    {department.leaderName}</h4>

                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Days: {department.workingDays}</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Hours: {department.workingHours} hours a day</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>   phone_Number: {department.phoneNumber}</h4>

                                            </Typography>





                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            )
                        }


                    }
                    )}

                    {departments.map((department, idx) => {
                        if (departments[idx].id == 'Children') {

                            return (

                                <Card onClick={() => myDepartment('Children')} sx={{ maxWidth: 345 }} className='cardieB' style={{ width: '90%', margin: '5%', height: '20%', position: 'relative', backgroundColor: '#75B8C8', color: 'white', boxShadow: ' rgb(136 136 136) 1px 2px 15px 2px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="40%"
                                            width="40%"

                                            image='https://scx2.b-cdn.net/gfx/news/hires/2016/firstofourth.jpg'

                                            alt="eyes"
                                        />
                                        <CardContent style={{ overflowY: 'scroll' }}>
                                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: '57px' }}>
                                                {department.departmentType} Department
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                                <h5>Paediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people seek pediatric care through the age of 21. In the United Kingdom, paediatrics covers patients until age 18.  Worldwide age limits of pediatrics have been trending up year over year.</h5>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4> Department_Chief :
                                                    {department.leaderName}</h4>

                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Days: {department.workingDays}</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Hours: {department.workingHours} hours a day</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>   phone_Number: {department.phoneNumber}</h4>

                                            </Typography>





                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            )
                        }


                    }
                    )}




                    {departments.map((department, idx) => {
                        if (departments[idx].id == 'Heart') {

                            return (

                                <Card onClick={() => myDepartment('Heart')} sx={{ maxWidth: 345 }} className='cardieB' style={{ width: '90%', margin: '5%', height: '20%', position: 'relative', backgroundColor: '#75B8C8', color: 'white', boxShadow: ' rgb(136 136 136) 1px 2px 15px 2px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="40%"
                                            width="40%"

                                            image='https://scx2.b-cdn.net/gfx/news/hires/2016/firstofourth.jpg'

                                            alt="eyes"
                                        />
                                        <CardContent style={{ overflowY: 'scroll' }}>
                                            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: '57px' }}>
                                                {department.departmentType} Department
                                            </Typography>
                                            <Typography variant="body2" color="white" style={{ color: '57px' }}>

                                                <h5>Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.</h5>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4> Department_Chief :
                                                    {department.leaderName}</h4>

                                            </Typography>



                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Days: {department.workingDays}</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>  working_Hours: {department.workingHours} hours a day</h4>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h4>   phone_Number: {department.phoneNumber}</h4>

                                            </Typography>





                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            )
                        }


                    }
                    )}



                </div>
            }

        </>
    );
}



