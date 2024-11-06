import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './App.css'
import Footer from './components/Footer';
import AddApplication from './pages/AddApplication';

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home name = {"homepage"}/>}/>
            <Route path="/home" element={<Home name = {"Homepage"}/>}/>
            <Route path="/AddApplication" element={<AddApplication name = {"Add Application"}/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
