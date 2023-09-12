import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li> */}
        </ul>
      </div>
        <button className='mode red' onClick={props.redColor}></button>
        <button className='mode green' onClick={props.greenColor}></button>
        <button className='mode blue' onClick={props.blueColor}></button>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable dark mode':'Enable light mode'}</label>
      </div>
    </div>

  </nav>
  )
}

Navbar.propTypes = { //Important, should be set
    title: PropTypes.string.isRequired, //also isRequired works by setting strict requirement for us to pass the value to the prop or, if we dont set default value, the value passed will be undefined
    aboutText: PropTypes.string.isRequired
}; //this will make a rule for the props to accept a specific datatype

Navbar.defaultProps = { //important, should be set
    title: 'Set title here',
    aboutText: 'Set About Text here' 
}; //this will set default values for the prop in cause no value is passed in app.js