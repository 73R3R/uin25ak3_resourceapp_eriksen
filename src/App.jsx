import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { fetchArbeidslogg } from './sanity/arbeidsService'
import { fetchMedlemmer } from './sanity/medlemService'
import { Route, Routes } from 'react-router-dom'
import MemberPage from './components/MemberPage'
import Home from './components/Home'

function App() {

  const [logs, setLogs] = useState([])
  const [members, setMembers] = useState([])

  const getMembers = async () => {
    const data = await fetchMedlemmer()
    setMembers(data)
  }

  const getWorklogs = async () => {
    const data = await fetchArbeidslogg()
    setLogs(data)
  }


  useEffect(() => {
    getMembers();
    getWorklogs();
  }, [])




  return (
    <>
    <Layout members={members}>
      <Routes>
        <Route path="/" element={<Home logs={logs} members={members}/>}/>
        <Route path="/:slug" element={<MemberPage members={members} />}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
