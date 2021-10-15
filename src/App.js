import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Department from './components/Departement/Department'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer'
import Header from './components/footer/footer'
// import Home from './components/home'




function App() {
  
  return (
    <>
    {/* <Header/> */}
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/Home">
          
            </Route>
        
         
         
          </Switch>
    
        </BrowserRouter>
 */}
 <Header/> 
 <Department/>
 <Footer/>
    </>
  );
}

export default App;