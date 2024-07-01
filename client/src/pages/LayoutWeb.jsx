import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const LayoutWeb = () => {
  return (
    <div >
        <Header />
        <Outlet />
    </div>
  )
}

export default LayoutWeb