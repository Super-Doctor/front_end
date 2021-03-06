import React, { useEffect, useState, useContext } from "react";
import { Modal, Button, DropdownButton, Dropdown,Form } from "react-bootstrap";
import { LoginContext } from "../../context/login";
import axios from "axios";
import swal from 'sweetalert';

function Modals(props) {
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setusers] = useState([]);

  const Login = useContext(LoginContext)
  useEffect(() => {
    let userData;
    let appointmentsLink = `https://super-doctors.herokuapp.com/AllAppointments/${props.doctorId}`;
    console.log(props.doctorId);
    axios
      .get(appointmentsLink)

      .then((res) => {
        setusers(res.data);
        console.log(res.data);

        console.log(Login.user.user, "5555555555555555555555555555");

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let bookFunc= async (e)=>{
e.preventDefault()
let date = `${e.target.date.value} ${e.target.time.value}`
// let time =${e.target.time.value}
console.log( date);
// console.log(time);
      let myBookObj = {
          patientName:Login?.user.user.userName,
          Date:date ,
          patientId:Login?.user.user.id,
          doctorId:props.doctorId
      }

    console.log(myBookObj);
    let link = 'https://super-doctors.herokuapp.com/bookAppointment'
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
        <Form onSubmit={bookFunc} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Appointment Data</Form.Label>
            
            <Form.Control  type="date" name="date" placeholder="Enter date" />
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control  type="time" name="time" placeholder="Enter time" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.showmodalFunc}>
              Close
            </Button>
            <Button type="submit" variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Modals;
