 
 import React from "react";
//  import {Card ,Button } from 'react-bootstrap';
import './Department.css'
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function Department (props){

        return (
            <div>
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

<div>
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



</div>

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
<div>
<Card style={{ width: '90%',margin:'5%', height:'20%',position:'relative', backgroundColor:'rgb(112 160 156)' ,color:'white' ,boxShadow:' rgb(136 136 136) 1px 2px 15px 2px'}}>
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
      </CardActionArea>
     
    </Card>


</div>
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
         
        className='cardimg' variant="top" style={{ width:'40%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4ZI9Q31uHOPCOqmmwXu2FyeNJepWBL8E6g&usqp=CAU" 
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent style={{width:'50%' ,padding:'0px'}}>
          <Typography style={{position:"absolute", right:'-17%', top:'15%' ,width:'50%' }}>
            Skin
          </Typography>
          <Typography style={{ float:'right', margindown:'100px',position:"absolute", right:'1%', top:'35%' ,width:'50%'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </div>
        )
     } 


export default Department

