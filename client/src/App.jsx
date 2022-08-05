// in app.js

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App