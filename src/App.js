// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

import React , {useState} from 'react';;


function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [buttonColor, setButtonColor] = useState('light')

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=> {
      setAlert(null);
    },1000);
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#272727'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils- Dark Mode"
      setInterval(() => {
        document.title = "There is 2 virus in this computer"
      }, 3000);

      setInterval(() => {
        document.title = "Install Text Utils"
      }, 2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils- Light Mode"
    }
  }

  const redColor = () =>{
    setButtonColor("danger")
    document.body.style.backgroundColor = "red"
    document.body.style.color = 'white'
  }
  const greenColor = () =>{
    setButtonColor("success")
    document.body.style.backgroundColor = "green"
    document.body.style.color = 'white'
  }
  const blueColor = () =>{
    setButtonColor("primary")
    document.body.style.backgroundColor = "blue"
    document.body.style.color = 'white'
  }
  


  return (
    <>
    {/* <Router> */}
    <Navbar title='Text Utils' aboutText='About' mode={mode} toggleMode={toggleMode} redColor={redColor} greenColor={greenColor} blueColor={blueColor}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
    <Route exact path='/' element={<TextForm showAlert={showAlert} mode={mode} buttonColor={buttonColor}/>}/>
    <Route exact path='/home' element={ */}
    <TextForm showAlert={showAlert} mode={mode} buttonColor={buttonColor}/>
    {/* }/> */}
    {/* <Route exact path='/about' element={<About/>}/> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
