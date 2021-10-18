import React, { useEffect, useState, useContext } from "react";
import { Modal,Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { LoginContext } from "../../context/login";
import axios from "axios";
import swal from 'sweetalert';

function AddModal(props) {
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setusers] = useState([]);

  const Login = useContext(LoginContext)
  useEffect(() => {
    let userData;
    let appointmentsLink = `https://super-doctors.herokuapp.com/doctorPatients/${props.doctorId}`;
    console.log(props.doctorId);
    axios
      .get(appointmentsLink)

      .then((res) => {
        setusers(res.data);
        console.log(res.data);

        console.log(Login.user.user,"5555555555555555555555555555");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let bookFunc= async (e)=>{
e.preventDefault()
// let date = e.target.date.value
      let myBookObj = {
        checkInDate: Login?.user?.user?.checkInDate,
            checkOutDate: Login?.user?.user?.checkOutDate,
            medicalCase: Login?.user?.user?.medicalCase,
            doctorName: Login?.user?.user?.doctorName,
            doctorReport: Login?.user?.user?.doctorReport,
            patientId: props.doctorId,
            doctorId:Login?.user?.user?.doctorId,
            departmentId:Login?.user?.user?.departmentId,
            status:Login?.user?.user?.status
          
      }

      console.log(myBookObj);
      let link = 'https://super-doctors.herokuapp.com/addMedicalInfo/doctor'
      await axios.post(link, myBookObj)
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
        console.log('Error in Axsios');

      });
      props.showmodalFunc()
  }

  return (
    <>
      <Modal show={props.showmodal} onHide={props.showmodalFunc}>
          <form onSubmit={bookFunc} >
        <Modal.Header closeButton>
          <Modal.Title>Update medical information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>checkInDate</Form.Label>
                    <Form.Control  type="date"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>checkOutDate</Form.Label>
                    <Form.Control  type="date"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>medicalCase</Form.Label>
                    <Form.Control  type="email"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>doctorName</Form.Label>
                    <Form.Control  type="email"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>doctorReport</Form.Label>
                    <Form.Control  type="email"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>patientId</Form.Label>
                    <Form.Control  type="email"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>doctorId</Form.Label>
                    <Form.Control  type="email"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>departmentId</Form.Label>
                    <Form.Control  type="email"     />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>status</Form.Label>
                    <Form.Control  type="email"     />
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
        </form>
      </Modal>
    </>
  );
}

export default AddModal;
