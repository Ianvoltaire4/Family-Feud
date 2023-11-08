import React from 'react'
import Registration from './components/Registration'
import RoundTwo from './components/RoundTwo'
import FinalRound from './components/FinalRound'
import Homepage from './Homepage'
import { Routes, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      {/* <Route path='/RoundTwo' element={<RoundTwo />} /> */}
      {/* <Route path='/FinalRound' element={<FinalRound />} /> */}
      {/* <Route path='/Roundone' element={<Roundone />} /> */}
      {/* <Route path='/Login' element={<Login />} /> */}
      <Route path='/Registration' element={<Registration />} />
    </Routes>
    </>
  )
}
export default App