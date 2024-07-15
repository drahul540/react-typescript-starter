import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import DefaultLayouts from './layouts/DefaultLayouts'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Header from './layouts/Header'

const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayouts />}>
            <Route index element={<Home />} />
            <Route path='features' element={<Features />} />
            <Route path='pricing' element={<Pricing />} />
        </Route>
    </Routes>
  )
}

export default RoutesConfig