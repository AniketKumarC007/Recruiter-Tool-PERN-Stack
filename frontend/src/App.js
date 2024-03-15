import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCandidate from './pages/AddCandidate';
import Candidates from './components/Candidates';
import Candidate from './components/Candidate';
import Navbar from './components/Navbar';

function App() {

  return (
   <>
   <Navbar></Navbar>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCandidate />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<Candidate />} />
    </Routes>
   </>
  );
}

export default App;
