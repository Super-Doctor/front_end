import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Department from './components/Departement/Department'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'


export default function App() {
  return (
    <div>
       <Header/>
      <BrowserRouter>
      <Route exact path="/Home">
      <Home/>
          </Route>
     
          <Route exact path="/Departments">
          <Department/>
          </Route>
     
     
      </BrowserRouter>
      <Footer/>
      </div>
  )
}

// function App() {
  
//   return (
//     <>
//     {/* <Header/> */}
//         {/* <BrowserRouter>
//           <Switch>
//             <Route exact path="/Home">
          
//             </Route>
        
         
         
//           </Switch>
    
//         </BrowserRouter>
//  */}
 
    
//     </>
//   );
// }

// export default App;