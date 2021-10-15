import React from 'react';
import ReactDOM from 'react-dom';
//import LoginProvider,{LoginContext} from './context/loginContext';
import App from './App.js';

class Main extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
