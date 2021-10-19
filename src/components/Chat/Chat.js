import React, { useContext, useEffect , useState } from 'react'
import { LoginContext } from '../../context/login'
import { Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';
import { handleChange, handleSubmit } from '../../hooks/form';
// const messageBody = document.getElementById('message')
export default function Chat(props) {
    const Login = useContext(LoginContext);
    const { handleChange, handleSubmit } = useForm(sendMessage);
    const[messages , setMessages] = useState(null);

    useEffect(() => {
        props.socket.on("receive_message", data => {
            console.log('receive_message ----> ', data);
          if( Login.user.user.id == data.id) {
                setMessages(data)
            }
        })

    })

    function sendMessage(message) {
        console.log(message.message)

        props.socket.emit('new_message', { message: message.message, id: props.id, userName: Login.user.user.userName })

        // props.socket.on("receive_message", data => {
        //     console.log('receive_message ----> ', data);
        //     if( Login.user.user.id == data.id) {
        //         setMessages(data)
        //     }
        // })
    }

    return (
        <div>
            {messages && console.log('From Return',messages)}
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onChange={handleChange} type="text" name="message" placeholder="Enter your message" />

                </Form.Group>



                <Button variant="primary" type="submit">
                    send
                </Button>

            </Form>
        </div>
    )
}
