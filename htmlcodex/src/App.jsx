import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchCard from './components/SearchCard'

const App = () => {
  return (
    <div className='px-4 sm:px-[7vw] md:px-[9vw] lg:px-[11vw]'>
      <Navbar />
      <SearchCard/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
