import React from 'react'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
  return (
    <>
      <div>MainApp</div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
