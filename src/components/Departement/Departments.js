import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Button, CardActionArea, CardActions } from '@mui/material';
import All from './All'
import './Department.css'

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
                    <h2 > Eyes Department</h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Skin' &&
                <>
                    {/* <button>Skin</button> */}
                    <h2> Skin Department</h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Bones' &&
                <>
                    <h2> Bones Department</h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Heart' &&
                <>
                    <h2> Heart Department</h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Children' &&
                <>
                    <h2> Children Department</h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === 'Kidney' &&
                <>
                    <h2> Kidney Department</h2>
                    <All users={users} depType={depType.toLowerCase()} />
                </>
            }
            {depType === '' &&

                <div className='homeCards' style={{  flexBasis:'auto'}}>

                  
                     {departments.map((department,idx)=>{ 
                     if(departments[idx].id == 'Eyes') { 

                    return( 
                      
                        <Card onClick={() => myDepartment('Eyes')}   className='cardieB'  style={{   border: "1px solid white",maxWidth: '400px',margin:'2%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
                            <CardActionArea>
                                <CardMedia  style={{ width:'100%',height:'40%' }}
                                    component="img"
                                    // height="50%"
                                    // width="60%"

                                    image='https://bhtclinic.com.tr/wp-content/uploads/2019/07/goz-sagligi-ve-hastaliklari.jpg'
                                    alt="eyes"
                                />
                                <CardContent style={{ overflowY: 'scroll' }}> 
                                    <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'cursive', marginLeft:'65px'  }}>
                                    {department.departmentType} Department
                                    </Typography>
                                    <Typography variant="body2"  style={{fontFamily: 'cursive', textIndent: '10px',textAlign:'center',color:"#1d3056" ,letterSpacing: '2px', fontWeight:'bold' ,textShadow: ' #dadadb 0.5px 0.5px'}}>
                                
                                     A branch of medicine and surgery that deals with the diagnosis and treatment of disorders of the eye. An ophthalmologist is a physician who specializes in ophthalmology.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056", letterSpacing: '1px' ,textShadow: ' #dadadb 0.4px 0.4px' }}>
                                    <h5> Department_Chief : </h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>  {department.leaderName}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.phoneNumber}</h6>
                                       </Typography>


                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5>  working_Days:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.workingDays}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                     <h5> working_Hours:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>from morning {department.workingHours} evening</h6>
                                    
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.phoneNumber}</h6>
                                       </Typography>



                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                      )
                   }
                  
                
  } 
   )} 
   {departments.map((department,idx)=>{ 
                     if(departments[idx].id == 'Heart') { 

                    return( 
                      
                        <Card onClick={() => myDepartment('Heart')}  className='cardieB' style={{border: "1px solid white",maxWidth: '400px',margin:'2%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
                            <CardActionArea>
                                <CardMedia style={{ width:'137%',height:'70%' }}
                                    component="img"
                                    // height="40%"
                                    // width="40%"
                                    // style={{ width: '400px%',margin:'5%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}
                                    image='https://scx2.b-cdn.net/gfx/news/hires/2016/firstofourth.jpg'

                                    alt="eyes"
                                />
                                <CardContent style={{ overflowY: 'scroll' }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'cursive', marginLeft:'65px' }}>
                                     {department.departmentType} Department
                                    </Typography>
                                    <Typography variant="body2" color="white"  style={{ fontFamily: 'cursive',textAlign:'center',color:"#1d3056" ,letterSpacing: '2px', fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                
                                       Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system ,The heart is a powerful muscle that pumps
blood throughout the body so it is needed to be taken care of.

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056", letterSpacing: '1px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5> Department_Chief : </h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>  {department.leaderName}</h6>
                                     
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>{department.phoneNumber}</h6>

                                    </Typography>


                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5>  working_Days:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>{department.workingDays}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                     <h5> working_Hours:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>from morning {department.workingHours} evening</h6>
                                    
                                    </Typography>
                                  




                                </CardContent>
                            </CardActionArea>
                    
                        </Card>
                      )
                   }
                  
                
  } 
   )} 

                  
                    
                    {departments.map((department,idx)=>{ 
                     if(departments[idx].id == 'Bones') { 

                    return( 
                      
                        <Card onClick={() => myDepartment('Bones')}   className='cardieB' style={{ border: "1px solid white",maxWidth: '400px',margin:'2%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
                            <CardActionArea>
                                <CardMedia style={{ width:'120%',height:'50%'  }}
                                    component="img"
                                    // height="40%"
                                    // width="40%"

                                    image='https://www.pacificmedicalsciences.ac.in/img/Departments/PageImage/Orthopedic_Dpage.png'

                                    alt="eyes"
                                />
                                <CardContent style={{ overflowY: 'scroll' }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'cursive', marginLeft:'65px' }}>
                                     {department.departmentType} Department
                                    </Typography> 
                                    <Typography variant="body2" color="text.secondary"  style={{ fontFamily: 'cursive',textAlign:'center',color:"#1d3056" ,letterSpacing: '2px', fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}} >
                                
                                        Orthopaedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. Orthopaedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumors, and congenital disorders. 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056", letterSpacing: '1px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5> Department_Chief : </h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>  {department.leaderName}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.phoneNumber}</h6>
                                       </Typography>


                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5>  working_Days:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.workingDays}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                     <h5> working_Hours:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>from morning {department.workingHours} evening</h6>
                                    
                                    </Typography>
                                 
                                </CardContent>
                            </CardActionArea>
                          
                        </Card>
                      )
                   }
                  
                
  } 
   )} 

{departments.map((department,idx)=>{ 
                     if(departments[idx].id == 'Kidney') { 

                    return( 
                      
                        <Card onClick={() => myDepartment('Kidney')}   className='cardieB' style={{  border: "1px solid white",maxWidth: '400px',margin:'2%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
                            <CardActionArea>
                                <CardMedia style={{ width:'100%',height:'50%' }}
                                    component="img"
                                    // height="40%"
                                    // width="40%"

                                    image='https://vinnhospital.com/wp-content/uploads/2018/06/NEPHROLOGY-DEPARTMENT-inner.jpg'

                                    alt="eyes"
                                />
                                <CardContent style={{ overflowY: 'scroll' }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'cursive', marginLeft:'65px' }}>
                                     {department.departmentType} Department
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{fontFamily: 'cursive', textAlign:'center',color:"#1d3056" ,letterSpacing: '2px', fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                
                                        Nephrology is a specialty of adult internal medicine and pediatric medicine that concerns the study of the kidneys, specifically normal kidney function (renal physiology) and kidney disease (renal pathophysiology), the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy (dialysis and kidney transplantation). 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056", letterSpacing: '1px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5> Department_Chief : </h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>  {department.leaderName}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.phoneNumber}</h6>



                                       </Typography>

                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5>  working_Days:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.workingDays}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                     <h5> working_Hours:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>from morning {department.workingHours} evening</h6>
                                    
                                    </Typography>
                                 

                                </CardContent>
                            </CardActionArea>
                       
                        </Card>
                      )
                   }
                  
                
  } 
   )} 

{departments.map((department,idx)=>{ 
                     if(departments[idx].id == 'Children') { 

                    return( 
                      
                        <Card onClick={() => myDepartment('Children')}  className='cardieB' style={{ border: "1px solid white",maxWidth: '400px',margin:'2%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
                            <CardActionArea>
                            {/* width:'126%' */}
                                <CardMedia style={{ width:'100%',height:'50%' }}
                                    component="img"
                                    // height="40%"
                                    // width="40%"

                                    image='https://scx2.b-cdn.net/gfx/news/hires/2016/firstofourth.jpg'

                                    alt="eyes"
                                />
                                <CardContent style={{ overflowY: 'scroll' }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'cursive', marginLeft:'65px' }}>
                                     {department.departmentType} Department
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"  style={{fontFamily: 'cursive', fontFamily: 'cursive',textAlign:'center',color:"#1d3056" ,letterSpacing: '2px', fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                
                                       Paediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people seek pediatric care through the age of 21. In the United Kingdom, paediatrics covers patients until age 18.  Worldwide age limits of pediatrics have been trending up year over year. 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056", letterSpacing: '1px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5> Department_Chief : </h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>  {department.leaderName}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.phoneNumber}</h6>

                                    </Typography>


                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5>  working_Days:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.workingDays}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                     <h5> working_Hours:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>from morning {department.workingHours} evening</h6>
                                    
                                    </Typography>
                                    



                                </CardContent>
                            </CardActionArea>
                   
                        </Card>
                      )
                   }
                  
                
  } 
   )} 

                
{departments.map((department,idx)=>{ 
                     if(departments[idx].id == 'Skin') { 

                    return( 
                      
                        <Card onClick={() => myDepartment('Skin')}   className='cardieB' style={{ border: "1px solid white",maxWidth: '400px',margin:'2%', height:'20%',position:'relative'  ,backgroundColor:'#75B8C8',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
                            <CardActionArea>
                                <CardMedia style={{ width:'100%',height:'20%' }}
                                    component="img"
                                    // height="40%"
                                    // width="40%"

                                    image='https://www.ashahospital.co.in/wp-content/uploads/2015/08/1.jpg'
                                    alt="eyes"
                                />
                                <CardContent style={{overflowY: 'scroll' }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'cursive',textAlign:'center', marginLeft:'100px'  ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                      {department.departmentType} Department
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"  style={{fontFamily: 'cursive',fontFamily: 'cursive', textAlign:'center',color:"#1d3056" ,letterSpacing: '2px', fontWeight:'bold', fontWeight:'bold' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                
                                       Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems. 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056", letterSpacing: '1px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5> Department_Chief : </h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>  {department.leaderName}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px',textShadow: ' #dadadb 0.4px 0.4px'}}>
                                       <h5>phone_Number: </h5><h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.phoneNumber}</h6>
                                       </Typography>


                                    <Typography variant="body2" color="text.secondary"style={{fontFamily: 'cursive', textAlign:'center', color:"#1d3056" ,letterSpacing: '2px' ,textShadow: ' #dadadb 0.4px 0.4px'}}>
                                    <h5>  working_Days:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>{department.workingDays}</h6>
                                     
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"style={{ fontFamily: 'cursive',textAlign:'center', color:"#1d3056" ,letterSpacing: '2px',textShadow: ' #dadadb 0.4px 0.4px'}}>
                                     <h5> working_Hours:</h5> <h6 style={{ textDecoration:'underline',fontWeight:'bold'}}>from morning {department.workingHours} evening</h6>
                                    
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



