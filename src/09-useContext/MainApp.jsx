import React from 'react'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { Navigate, Route, Routes } from 'react-router-dom'

export const MainApp = () => {
  return (
    <>
      <div>MainApp</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
