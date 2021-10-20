import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../context/login'
import { Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';
import { handleChange, handleSubmit } from '../../hooks/form';
import './chat.scss'
// const messageBody = document.getElementById('message')
export default function Chat(props) {
    const Login = useContext(LoginContext);
    const { handleChange, handleSubmit } = useForm(sendMessage);
    const [messages, setMessages] = useState(null);
    const [myMessages, setMyMessages] = useState(null);


    props.socket.on("getallmessages", data => {
        // console.log('receive_messagessssss ----> ', data);
        //   let filtered =  data.filter(message => {
        //         if (Login.user.user.id == message.reciverId) {
        //            return true
        //         }
        //     })
        setMessages(data)

    })

    props.socket.on("receive_message", data => {
        // console.log('receive_message ----> ', data);
        if (data) {
            setMessages(null)
            setMessages(data)
        }


    })
    console.log(props.reciver);
    function sendMessage(message) {
        // console.log(props.reciver)

        props.socket.emit('new_message', { message: message.message, reciverId: props.reciver.id, reciverName: props.reciver.userName, senderName: Login.user.user.userName, senderId: Login.user.user.id })


        props.socket.on("receive_message", data => {
            // console.log('receive_message from click=----> ', data);
            setMessages(null)
            setMessages(data)


        })




    }

    // console.log('Before Return', messages)


    return (
        <div>
            {/* {messages && console.log('From Return', messages)} */}

            {messages &&
                <div className='messagesDiv'>
                    {messages.map(message => {
                        return (
                            <>
                                {(props.reciver.id == message.reciverId || props.reciver.id == message.senderId) &&

                                    <>
                                        {
                                            Login.user.user.id == message.reciverId &&
                                            <li className='othermessages'><span>{message.senderName} : {message.message}</span></li>
                                        }
                                        {
                                            Login.user.user.id == message.senderId &&
                                            <li className='mymessages'><span>Me : {message.message}</span></li>
                                        }
                                    </>
                                }
                            </>
                        )
                    })}

                </div>
            }

            {/* { myMessages && myMessages.senderId==Login.user.user.id &&
            
            <li>Me : {myMessages.message}</li>

            } */}
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className="input" onChange={handleChange} type="text" name="message" placeholder="Enter your message" />

              



                <Button variant="primary" type="submit">
                    send
                </Button>
                </Form.Group>

            </Form>
        </div>
    )
}
