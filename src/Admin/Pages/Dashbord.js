import React from 'react'
import WrappedComponent from '../../HOC/WrappedComponent'

const Dashbord = (props) => {
  console.log(props)

  return (
    <div>dashboard {props.state}</div>
  )
}

const Newcomp=WrappedComponent(Dashbord);
export default Newcomp;