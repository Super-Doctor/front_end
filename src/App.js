import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import SignIn from './components/SignUp-In/SignIn'
import SignUp from './components/SignUp-In/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { When } from 'react-if';
import { LoginContext } from './context/login'
import Departments from './components/Departement/Departments'



export default class App extends React.Component {

  static contextType = LoginContext;
  render() {
    return (
      <div>

        <Router >
          <When condition={!this.context.toggleLogIn} >
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/aboutus">

              </Route>

              <Route path="/departments">
                <Departments />
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
