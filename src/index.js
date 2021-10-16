import React from 'react';
import ReactDOM from 'react-dom';
//import LoginProvider,{LoginContext} from './context/loginContext';
import App from './App.js';
import LoginProvider from './context/login.js';

class Main extends React.Component {
  // componentDidMount(){
  //   document.title = "Super Doctor"
  // }
  render() {
    return (
      <LoginProvider>
        <App />
      </LoginProvider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
