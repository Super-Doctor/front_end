import React, { useContext } from 'react'
import { Form, Button, Dropdown, Col, Row } from 'react-bootstrap';
import { LoginContext } from '../../context/login';
import "./sign.scss";
import useForm from '../../hooks/form';

export default function SignUp() {
    const login = useContext(LoginContext);
    const { handleChange, handleSubmit } = useForm(handleSignUp);

    function handleSignUp(user) {
        login.signUp(user)
    }

    return (
        <div className="signup">
            <h1>Sign Up Form</h1>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Enter First Name" name="first" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMid">
                    <Form.Label>Mid. Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Enter Mid. Name" name="mid" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Enter Last Name" name="last" />
                </Form.Group>



                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Gender
                    </Form.Label>
                    <Col sm={10} onChange={handleChange}>
                        <Form.Check
                            type="radio"
                            label=" ♂️ Male"
                            value = "male"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="♀️ Female"
                            value = "female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />

                    </Col>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control onChange={handleChange} type="date" placeholder="Enter Last Name" name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={handleChange} type="tel" placeholder="Enter Phone Number" name="phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone_2">
                    <Form.Label>Secondary Number</Form.Label>
                    <Form.Control onChange={handleChange} type="tel" placeholder="Enter Secondary Number" name="secPhone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleChange} type="address" placeholder="Enter Last Name" name="address" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" placeholder="Password" name="password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword_1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" placeholder="Re-Type Password" name="confirmPassword" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit"  >
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}
