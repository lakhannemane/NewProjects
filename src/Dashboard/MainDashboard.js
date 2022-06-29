import React from 'react'
import Newcomp from '../Admin/Pages/Dashbord'
import WrappedComponent from '../HOC/WrappedComponent'
import Header from './Header'
import Sidebar from './Sidebar'

const MainDashboard = () => {
  return (
    <div>
        <Sidebar/>
        <Header/>
        <Newcomp/>
    </div>
  )
}

export default MainDashboard