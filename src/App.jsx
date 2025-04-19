import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { fetchArbeidslogg } from './sanity/arbeidsService'
import { fetchMedlemmer } from './sanity/medlemService'
import { Route, Routes } from 'react-router-dom'
import MemberPage from './components/MemberPage'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<MemberPage />}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
