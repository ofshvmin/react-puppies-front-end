//nmp modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'
import NewPuppy from './pages/NewPuppy/NewPuppy'

// components
import Nav from './components/Nav'

// services
import * as puppyService from './services/puppyService'

const App = () => {

  const [puppies, setPuppies] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      setPuppies(data)
    }
    fetchPuppies()
  }, [])

  const handleAddPuppy = async formData => {
    //make API call and await new puppy
    const newPuppy = await puppyService.create(formData)
    //set state with the new puppy returned
    setPuppies([newPuppy, ...puppies])
    //navigate
    navigate('/puppies')
  } 

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={ <PuppyList puppies={puppies} /> } />
        <Route path='/puppies/new' element={ <NewPuppy handleAddPuppy={handleAddPuppy} /> } />
      </Routes>
      
    </>
  )
}

export default App