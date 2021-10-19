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


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false, appointmentData: [] };
  }

  showmodal = () => {
    this.setState({
      show: !this.state.show,
    });
    let getDoctorAppointment = async (doctorId) => {
      let appointmentsLink = `https://super-doctors.herokuapp.com/AllAppointments/${doctorId}`;

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

  static contextType = LoginContext;

  // componentDidMount () {
  //  let userData = JSON.parse(localStorage.getItem('user'))

  // if(userData) {
  //   this.context.setLoginState(true , userData)

  // }

  // }
  render() {

    return (
      <div>

        <Header />
        <Router >
          <When condition={!this.context.toggleLogIn} >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/aboutus">
                <AboutUs />
              </Route>
             
              <Route path="/appointments">
                <Appointments />
              </Route>

              <Route path="/patientsAppointment">
                <PatientsAppointments />
              </Route>

              <Route path="/chat">
                <UsersList />
              </Route>

              <Route path="/patientslist">
                {console.log(this.context.userCapability)};
                {this.context.userCapability > 4 ?
                  <>
                    <PatientsList />

                    <button onClick={this.showmodal}>Update medical information
                      <AddModal appointmentData={this.state.appointmentData}
                        // doctorId={this.props.users[index].user.id}
                        showmodalFunc={this.showmodal}
                        showmodal={this.state.show} />

                    </button>

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


              <Route path="/departments">

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
