import ReactDom from "react-dom";
import App from "./App";

// import "bootstrap/dist/css/bootstrap.min.css";



function Main() {
  return (
    <>
   
          <App />
      
    </>
  );
}
ReactDom.render(<Main />, document.getElementById("root"));