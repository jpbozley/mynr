import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Medications from './Pages/Medications/Medications';
import Schedule from './Pages/Schedule/Schedule';
import Header from './Components/Header/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Medications" element={<Medications />}></Route>
          <Route path="/Schedule" element={<Schedule />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
