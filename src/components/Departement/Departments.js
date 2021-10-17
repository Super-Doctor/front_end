import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Button, CardActionArea, CardActions } from '@mui/material';
import All from './All'

export default function Departments() {
    const [depType, setDepType] = useState('');


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

                    <div>
                        <Card onClick={() => myDepartment('Eyes')}  sx={{ maxWidth: 345 }} className='cardieB'>
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


                        <Card onClick={() => myDepartment('Skin')} style={{display:"inline-block"}} sx={{ maxWidth: 345 }} className='cardieB'>
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



                        <Card onClick={() => myDepartment('Bones')} style={{display:"inline-block"}} sx={{ maxWidth: 345 }} className='cardieB'>
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
                                <Button size="small" color="primary">
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div>
                        <Card onClick={() => myDepartment('Kidney')} style={{display:"inline-block"}} sx={{ maxWidth: 345 }} className='cardieB'>
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


                        <Card onClick={() => myDepartment('Children')} style={{display:"inline-block"}} sx={{ maxWidth: 345 }} className='cardieB'>
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




                        <Card onClick={() => myDepartment('Heart')} style={{display:"inline-block"}} sx={{ maxWidth: 345 }} className='cardieB'>
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
            }

        </>
    );
}



