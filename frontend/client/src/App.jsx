import React from 'react'
import Registration from './components/Registration'
import Roundthree from './components/Roundthree'
import { Routes, Route, Link } from "react-router-dom";


// import RoundTwo from './components/RoundTwo'

import RoundTwo from './components/RoundTwo'



const App = () => {
  return (
    <>


  <Routes>
  <Route path="/Roundthree" element={<Roundthree />} />
  <Route path="/Registration" element={<Registration />} />
  </Routes>
    </>
  )
}
export default App