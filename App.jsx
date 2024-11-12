import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './App.css'
import Footer from './components/Footer';
import AddApplication from './pages/AddApplication';
import RecentApplications from './pages/RecentApplications';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import Archive from './pages/Archive';

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home name = {"homepage"}/>}/>
            <Route path="/home" element={<Home name = {"Homepage"}/>}/>
            <Route path="/AddApplication" element={<AddApplication name = {"Add Application"}/>}/>
            <Route path="/recentApplications" element={<RecentApplications name = {"Recent Applications"}/>}/>
            <Route path="/calendar" element={<Calendar name = {"Calendar"}/>}/>
            <Route path="/stats" element={<Stats name = {"Statistics"}/>}/>
            <Route path="/archive" element={<Archive name = {"Archive"}/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
