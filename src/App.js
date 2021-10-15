import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Department from './components/Departement/Department'
import 'bootstrap/dist/css/bootstrap.min.css';

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
  <Department/>
    
    </>
  );
}

export default App;