import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Meals from './Components/Meals'
import MealDetail from './Components/MealDetail'
import Error from './Components/Error'
import Search from './Components/Search'

const App = () => {
  return (
    <div className=' container mx-auto p-5 md:px-10'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Meals/>} />
        <Route path='/*' element={<Error/>} />
        <Route path='/detail/:id' element={<MealDetail />} />
        <Route path='/search/:name' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App