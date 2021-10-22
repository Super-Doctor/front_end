import React, { useEffect, useState, useContext } from "react";
import { Modal,Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { LoginContext } from "../../context/login";
import axios from "axios";
import swal from 'sweetalert';
import cookie from 'react-cookies';

function AddModal(props) {
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setusers] = useState([]);
  let token=cookie.load("token");

  const Login = useContext(LoginContext)
  useEffect(() => {
    let userData;
    let appointmentsLink = `https://super-doctors.herokuapp.com/doctorPatients/${Login.user.user.id}`;
    console.log(Login.user.user.id);
    console.log(cookie.load("token"));
    axios
      .get(appointmentsLink)

      .then((res) => {
        setusers(res.data[0]);
        console.log(res.data[0]);

        console.log(users,"5555555555555555555555555555");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let bookFunc= async (e)=>{
e.preventDefault()
// let date = e.target.date.value
      let myBookObj = {
        checkInDate: e.target.checkInDate.value,
            checkOutDate:e.target.checkOutDate.value,
            medicalCase: e.target.medicalCase.value,
            doctorName: e.target.doctorName.value,
            doctorReport: e.target.doctorReport.value,
            patientId: e.target.patientId.value,
            doctorId: e.target.doctorId.value,
            departmentId:e.target.departmentId.value,
            status:e.target.status.value
          
      }

      console.log(myBookObj);
      // console.log(users);
      let link = 'https://super-doctors.herokuapp.com/addMedicalInfo/doctor'
      await axios.post(link, myBookObj
        ,{headers: {'Authorization': `Basic ${token}`}})
      .then((res) => {
        // alert
        swal({
            title: "Reservation Accepted!",
            text: "we will contact you soon",
            icon: "success",
            button: "okay!",
          });
        console.log('555');
      })
      .catch((err) => {
        // alert
        swal({
            title: "error occured!",
            text: "something went wrong",
            icon: "warning",
            button: "try again!",
          });
        console.log('Error in Axsios',err);

      });
      props.showmodalFunc()
  }

  return (
    <div style={{marginBottom:'100px'}}>
      <Modal show={props.showmodal} onHide={props.showmodalFunc}>
          <Form onSubmit={bookFunc} >
        <Modal.Header closeButton>
          <Modal.Title>Add medical information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>checkInDate</Form.Label>
                    <Form.Control  type="date" name='checkInDate'    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>checkOutDate</Form.Label>
                    <Form.Control  type="date"   name='checkOutDate'  />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>medicalCase</Form.Label>
                    <Form.Control   name='medicalCase'   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>doctorName</Form.Label>
                    <Form.Control  name='doctorName'      />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>doctorReport</Form.Label>
                    <Form.Control    name='doctorReport'   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>patientId</Form.Label>
                    <Form.Control  name='patientId'   />
                    <Form.Text className="text-muted" >
                      {/* {users.patientId} */}
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>doctorId</Form.Label>
                    <Form.Control  name='doctorId'    />
                    <Form.Text className="text-muted">
                    {/* {users.doctorId} */}

                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>departmentId</Form.Label>
                    <Form.Control   name='departmentId'     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>status</Form.Label>
                    <Form.Control    name='status'   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={props.showmodalFunc}>
            Close
          </Button>
          <Button type="submit" variant="primary">Save Changes</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddModal;
