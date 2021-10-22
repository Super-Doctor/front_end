
import React, { useContext, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap/";
import "./profile.css";
import { LoginContext } from "../../context/login";



export default function Profile(props) {

    const Login = useContext(LoginContext)

    return (

        <div style={{marginTop:'150px'}}>
            {
                Login.loggedIn &&
                <>
                    {console.log(Login.user.user)}

                    <Card className="card cardProfile">
                        {/* .......... user info ................. */}
                      
                        {
                            Login.user.user.departmentId !== undefined &&
                            <Card.Img
                                className="cardName"
                                variant="top"
                                src='http://mandoubapp.com/public/uploads/doctors/r8VRdtgphyjjSm32Azly8uTxBa5cHJ7EwdAlSZZi.jpg'
                            />
                        }

                        {
                            Login.user.user.departmentId == undefined &&
                            <Card.Img
                                className="cardName"
                                variant="top"
                                src='data:image/png;base64,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'
                            />
                        }


                        <Card.Title className="title">Name: {Login.user.user.userName}</Card.Title>
                        <Card.Body className="infoContener">
                            <Card.Title className="info">
                                Email: {Login.user.user.email}
                            </Card.Title>
                            <Card.Title className="info">
                                Gender: {Login.user.user.gender}
                            </Card.Title>
                            {
                                Login.user.user.departmentId !== undefined &&
                                <Card.Title className="info">
                                    Doctor Department:  {Login.user.user.departmentId}
                                </Card.Title>
                            }

                        </Card.Body>


                    </Card>
                </>
            }

        </div>
    );
}
