import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../context/login'
import { Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';
import { handleChange, handleSubmit } from '../../hooks/form';
import './chat.css'
// const messageBody = document.getElementById('message')
export default function Chat(props) {
    const Login = useContext(LoginContext);
    const { handleChange, handleSubmit } = useForm(sendMessage);
    const [messages, setMessages] = useState(null);
    const [myMessages, setMyMessages] = useState(null);

    const { startVideo } = useForm(sendMessage);

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
        console.log(message);
        // console.log(props.reciver)
        let input = document.querySelector('.input');
        input.value = '';

        props.socket.emit('new_message', { message: message.message, reciverId: props.reciver.id, reciverName: props.reciver.userName, senderName: Login.user.user.userName, senderId: Login.user.user.id })


        props.socket.on("receive_message", data => {
            // console.log('receive_message from click=----> ', data);
            setMessages(null)
            setMessages(data)


        })






    }

    // console.log('Before Return', messages)


    return (
        <div className="mainChat">
            <div className="header">
                <div id="exit">
                    <img src="https://img.icons8.com/windows/32/000000/left.png" onClick={props.endChat} />
                    {/* <Button onClick={props.endChat}>Exit Chat</Button>*/}
                </div>
                <div id="h3">
                    {Login.user.user.roleId == 1 ? <h3>Dr.{(props.reciver.userName).toUpperCase()}</h3> : <h3>{(props.reciver.userName).toUpperCase()}</h3>}
                </div>
                {/* <div>
                    start chat
                </div> */}



            </div>

            {messages &&
                <div className='messagesDiv'>
                    {messages.map(message => {
                        return (
                            <>
                                {(props.reciver.id == message.reciverId || props.reciver.id == message.senderId) &&

                                    <>
                                        {
                                            Login.user.user.id == message.reciverId &&
                                            <div id="othermessages">
                                                {message.message == 'https://hema-video-chat.herokuapp.com/?room=hospital_1' ?
                                                    <li className='othermessages'><span> <a href={message.message} target="_blank">{message.message}</a> </span></li> :
                                                    <li className='othermessages'><span> {message.message}</span></li>
                                                }
                                            </div>
                                        }
                                        {
                                            Login.user.user.id == message.senderId &&
                                            <div id='mymessages'>
                                                {message.message == 'https://hema-video-chat.herokuapp.com/?room=hospital_1' ?
                                                    <li className='mymessages'><span> <a href={message.message} target="_blank" >{message.message}</a> </span></li> :
                                                    <li className='mymessages'><span> {message.message}</span></li>
                                                }
                                            </div>

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

            <Form >


                <div className='from'>
                    <Form.Control className="input" onChange={handleChange} type="text" name="message" placeholder="Enter your message" />



                    <div id='chatbuttons'>
                        <div id='video' onClick={startVideo}> <img src="https://img.icons8.com/windows/32/000000/video-call--v1.png" /></div>
                        <div id='send' onClick={handleSubmit}><img src="https://img.icons8.com/plumpy/32/000000/filled-sent.png" />
                        </div>
                    </div>

                    {/* <Button variant="primary" onClick={startVideo}>
                    send
                </Button> */}
                </div>

            </Form>
        </div>
    )
}
