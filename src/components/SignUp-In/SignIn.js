import React, { useContext } from 'react'
import { Form , Button } from 'react-bootstrap'
import "./sign.css";

import useForm from '../../hooks/form';
import { LoginContext } from '../../context/login';

export default function SignIn() {

    const login = useContext(LoginContext);
    const { handleChange, handleSubmit } = useForm(handleLogin);

    function handleLogin(user) {
        // console.log(user)
        login.login(user.email , user.password)
    }
    return (
        <div className = "signin">

            <h1>Sign In Form</h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
   
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <span> Don't have an account ? <a onClick = {login.toggleSignUpState}>Sign Up</a> </span>
            </Form>
        </div>
    )
}
