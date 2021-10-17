 
import React,{useEffect , useState} from "react";
import axios from 'axios';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function Department() {
const [users, setusers] = useState([]);

  // useEffect(()=>{
  //   let userData;
  //   axios.get('https://super-doctors.herokuapp.com/alldoctors')
  //    .then(res =>{
  //     setusers(res.data)
  //   console.log(res.data);
  //    })
    
    
  //   .catch(err =>{
  //      console.log(err);
  //    })
  //   },[])



    return (
        <div className='homeCards'>

            <div>
            {users.map(user => {
            <Card sx={{ maxWidth: 345 }} className='cardieB'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image='https://bhtclinic.com.tr/wp-content/uploads/2019/07/goz-sagligi-ve-hastaliklari.jpg'
                        alt="eyes"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Eyes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A branch of medicine and surgery that deals with the diagnosis and treatment of disorders of the eye. An ophthalmologist is a physician who specializes in ophthalmology.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>
            })
            }
            <Card sx={{ maxWidth: 345 }} className='cardieB'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image='https://www.ashahospital.co.in/wp-content/uploads/2015/08/1.jpg'
                        alt="skin"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Skin
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>



            <Card sx={{ maxWidth: 345 }} className='cardieB'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image='https://www.pacificmedicalsciences.ac.in/img/Departments/PageImage/Orthopedic_Dpage.png'
                        alt="bones"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bones
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Orthopaedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. Orthopaedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumors, and congenital disorders.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={console.log('aaaaa')} color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>
            </div>

            <div>
            <Card sx={{ maxWidth: 345 }} className='cardieB'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image='https://vinnhospital.com/wp-content/uploads/2018/06/NEPHROLOGY-DEPARTMENT-inner.jpg'
                        alt="kidney"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Kidney
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Nephrology is a specialty of adult internal medicine and pediatric medicine that concerns the study of the kidneys, specifically normal kidney function (renal physiology) and kidney disease (renal pathophysiology), the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy (dialysis and kidney transplantation).
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }} className='cardieB'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image='https://care24hospital.in/images/dept/paediatrics-hospital-erode.jpg'
                        alt="children"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Children
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Paediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people seek pediatric care through the age of 21. In the United Kingdom, paediatrics covers patients until age 18.  Worldwide age limits of pediatrics have been trending up year over year. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>




            <Card sx={{ maxWidth: 345 }} className='cardieB'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image='https://scx2.b-cdn.net/gfx/news/hires/2016/firstofourth.jpg'
                        alt="Heart"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Heart
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>
            </div>


        </div>
    );
}























//  import {Card ,Button } from 'react-bootstrap';
// import './Department.css'
// import Grid from '@mui/material/Grid';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import React,{useEffect , useState} from "react";
// import axios from 'axios';


// function Department (props){




// useEffect(()=>{
//   (async ()=>{
//     let userData;
//     try{
//       const response = await axios.get('https://super-doctors.herokuapp.com/alldoctors')
//       const userData = await response.json();
//       } catch(err){
//         console.log(err);
//         userData = []
//       }

//       setusers(userData);
//       })()
   

//   })



  
  
  
        // return (
        //     <div>
                {/* <Grid container spacing={5}> */}


                {/* <Card className='card1' style={{ transform: 'translate(-1%, -1%)',width: '90%',margin:'5%', height:'20%',position:'relative',color:'white', backgroundColor:'rgb(112 160 156)'  ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
  <Card.Img className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD83hPog311jyWV-YOS8Wmk1B-DaeqXVcxTus13qQPM6lSCJo489RLdfCc7YukFZckXK0&usqp=CAU" />
  <Card.Body style={{width:'50%' ,padding:'0px'}}>
    <Card.Title style={{ fontSize: 'larger',fontWeight: 'bold',position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>Eyes</Card.Title>
    <Card.Text style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card> */}

{/* <div> */}
{/*  */}
 {/* <Card className='card1' style={{ width: '90%',margin:'5%', height:'20%',position:'relative'  ,backgroundColor:'rgb(112 160 156)',color:'white', boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
  <Card.Img  className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoNVjLQu0m3gohs0vugCuTkGWIsa-DZJE_A&usqp=CAU" />
  <Card.Body style={{width:'50%' ,padding:'0px'}}>
    <Card.Title style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>Bone</Card.Title>
    <Card.Text style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card> */}


// </div>

{/* <Card className='card1' style={{ width: '90%',margin:'5%', height:'20%',position:'relative', backgroundColor:'rgb(112 160 156)' ,color:'white' ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
  
  <Card.Img  className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4ZI9Q31uHOPCOqmmwXu2FyeNJepWBL8E6g&usqp=CAU" />
  <Card.Body style={{width:'50%' ,padding:'0px'}}>
    <Card.Title style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>Skin</Card.Title>
    <Card.Text style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card> */}

{/* </Grid> */}
{/* <span> */}
  {/*  */}
{/* <Card style={{ width: '90%',margin:'5%', height:'20%',position:'relative', backgroundColor:'rgb(112 160 156)' ,color:'white' ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
      <CardActionArea >
        <CardMedia
          component="img"
         
        className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD83hPog311jyWV-YOS8Wmk1B-DaeqXVcxTus13qQPM6lSCJo489RLdfCc7YukFZckXK0&usqp=CAU" 
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent style={{width:'50%' ,padding:'0px'}}>
          <Typography style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>
           Eyes
          </Typography>
          <Typography style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
 
         
        </CardContent>
       
      </CardActionArea> */}

      {/* <Button style={{position:'relative',left:'600px', backgroundColor:'grey' ,color:'white' ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}} onClick= 'd***'>click</Button> */}
   
    {/* </Card> */}
{/* })
  } */}
{/* </span>
<div>
<Card style={{ width: '90%',margin:'5%', height:'20%',position:'relative', backgroundColor:'rgb(112 160 156)' ,color:'white' ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
      <CardActionArea >
        <CardMedia
          component="img"
         
        className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoNVjLQu0m3gohs0vugCuTkGWIsa-DZJE_A&usqp=CAU" 
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent style={{width:'50%' ,padding:'0px'}}>
          <Typography style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>
           Bones
          </Typography>
          <Typography style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>


</div>
<Card style={{ width: '90%',margin:'5%', height:'20%',position:'relative', backgroundColor:'rgb(112 160 156)' ,color:'white' ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
      <CardActionArea >
        <CardMedia
          component="img"
          */}
//         className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4ZI9Q31uHOPCOqmmwXu2FyeNJepWBL8E6g&usqp=CAU" 
//           // image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent style={{width:'50%' ,padding:'0px'}}>
//           <Typography style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>
//             Skin
//           </Typography>
//           <Typography style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
     
//     </Card>

//             </div>
//         )
//      } 


// export default Department
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

