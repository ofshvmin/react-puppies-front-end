//nmp modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'

// components
import Nav from './components/Nav'

// services
import * as puppyService from './services/puppyService'

const App = () => {

  const [puppies, setPuppies] = useState([])


  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      setPuppies(data)
    }
    fetchPuppies()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={ <PuppyList puppies={puppies} /> } />
      </Routes>
      
    </>
  )
}

export default App