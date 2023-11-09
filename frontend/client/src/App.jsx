import React from 'react'
import Registration from './components/Registration'
import Roundthree from './components/Roundthree'
import { Routes, Route, Link } from "react-router-dom";


// import RoundTwo from './components/RoundTwo'

import RoundTwo from './components/RoundTwo'



const App = () => {
  return (
    <>
    <Registration />
    <Roundthree />

<Link to='/Registration'></Link>
<Link to='Roundthree'></Link>
  <Routes>
  <Route path="/Roundthree" element={<Roundthree />} />
  <Route path="/Registration" element={<Registration />}  />
  </Routes>
    </>
  )
}
export default App