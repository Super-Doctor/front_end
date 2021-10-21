// import React from 'react'
import React, { useContext } from 'react';

import Footer from './components/footer'
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/SignUp-In/SignIn'
import SignUp from './components/SignUp-In/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { When } from 'react-if';
import { LoginContext } from './context/login'
import { If, Else, Then } from 'react-if';
import Departments from './components/Departement/Departments'
import PatientsList from './components/Patients/PatientsList'
import Profile from './components/Profile/Profile'
import Appointments from './components/Appointments/Appointments'
import PatientsAppointments from './components/Appointments/PatientsAppointments'
import Auth from './context/auth'
import axios from 'axios';
import AddModal from './components/Patients/AddModal'
import AboutUs from '../src/components/AboutUs/AboutUs'


import Modals from './components/Departement/model'
import UsersList from './components/Chat/UsersList';
import RecordList from './components/Patients/RecordList';
import { Login } from '@mui/icons-material';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      appointmentData: []
    };
  }

  showmodal = () => {
    this.setState({
      show: !this.state.show,
    });
    let getDoctorAppointment = async (doctorId) => {
      let appointmentsLink = `https://super-doctors.herokuapp.com/doctorPatients/${doctorId}`;

      await axios
        .get(appointmentsLink)
        .then((res) => {
          this.setState({
            appointmentData: res,
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  // static logincontext = useContext(LoginContext);
  handleClose = async () => {
    this.setState({
      show: false,


    })
  }
  static contextType = LoginContext;

  // componentDidMount () {
  //  let userData = JSON.parse(localStorage.getItem('user'))

  // if(userData) {
  //   this.context.setLoginState(true , userData)

  // }

  // }
  render() {

    return (
      <div style={{ backgroundColor: '#eee' }}>

        <Header />
        <Router >
          <When condition={!this.context.toggleLogIn} >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/aboutus">
                <AboutUs />
              </Route>

              <Route exact path="/appointments">
                <Appointments />
              </Route>

              <Route exact path="/patientsAppointment">
                <PatientsAppointments />
              </Route>

              <Route exact path="/chat">
                <UsersList />
              </Route>

              {this.context.user &&
                <Route exact path="/myRecords">
                  <RecordList patientId={this.context.user.user.id} />
                </Route>}


              <Route exact path="/patientslist">
                {console.log(this.context.userCapability)};
                {this.context.userCapability > 4 ?
                  <>
                    <PatientsList />
                    <div style={{ position: 'relative', left: '600px', color: '#33516F' }}>
                      <button style={{ color: 'white', backgroundColor: '#33516F' }} onClick={this.showmodal}>Add medical information
                      </button>
                    </div>
                    {this.state.show && (
                      <AddModal appointmentData={this.state.appointmentData}
                        // doctorId={this.props.users.id}
                        showmodalFunc={this.showmodal}
                        showmodal={this.state.show}
                        handleClose={this.handleClose} />
                    )}

                  </> : <PatientsList />}



                {/* <Auth capability="update-medicalRecord">
              <PatientsList/>
                <h2>you can read this!!</h2>
                <button>Add more information</button>

            </Auth>
            <Auth capability="read">
            <PatientsList/>
                <h2>you can read thccccccis!!</h2>
            </Auth>
                 */}
                {/* <Else>
                    <h2>you don't have a permission to control the settings!</h2>
                  </Else> */}
                {/* </When> */}
              </Route>


              <Route exact path="/departments">

                <Departments />

              </Route>


              {/* <Route path="/Modals"> */}



              {/* </Route> */}



            </Switch>
          </When>
          <When condition={this.context.toggleLogIn}>

            <When condition={!this.context.toggSignUp}>
              <SignIn />
            </When>


            <When condition={this.context.toggSignUp}>
              <SignUp />
            </When>

          </When>
          <Footer />
        </Router>


        {/* <SignUp/> */}

      </div>
    )
  }
}
