import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Medications from './Pages/Medications/Medications';
import Schedule from './Pages/Schedule/Schedule';
import EditDetails from './Pages/EditDetails/EditDetails';
import EditSchedule from './Pages/EditSchedule/EditSchedule';
import Header from './Components/Header/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/medications" element={<Medications />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/edit" element={<EditDetails />}></Route>
          <Route path="/schedule/edit" element={<EditSchedule />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
