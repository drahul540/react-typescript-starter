import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const DefaultLayouts = () => {
  return (
    <>
        
        <Header />
        <Outlet />
    </>
  )
}

export default DefaultLayouts