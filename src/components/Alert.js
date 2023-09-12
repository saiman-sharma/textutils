import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
//here props.alert && works in a way that it is evalualted first and if it returns null, the components after && won't run
//equivalent to if props.alert is !null
export default Alert