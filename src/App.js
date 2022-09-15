import './App.css';
import React from 'react';
import Books from './components/Books';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import Navig from './components/Navig';


const App =()=> {
  return(
    <>
    <Navig />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
  )

}

export default App;
