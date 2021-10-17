import React from 'react'
import Footer from './components/footer'
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/SignUp-In/SignIn'
import SignUp from './components/SignUp-In/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { When } from 'react-if';
import { LoginContext } from './context/login'
import Departments from './components/Departement/Departments'
import PatientsList from './components/Patients/PatientsList'
import Profile from './components/Profile/Profile'
import Appointments from './components/Appointments/Appointments'




export default class App extends React.Component {

 
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
          <When condition={!this.context.toggleLogIn } >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile/>
              </Route>

              <Route path="/appointments">
                <Appointments/>
              </Route>

              <Route path="/patientslist">
                <PatientsList/>
              </Route>
              
              <Route path="/departments">

                <Departments/>

              </Route>

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
