import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navig from './components/Navig';

const App = () => (
  <>
    <Navig />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
