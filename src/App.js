import classes from './App.module.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Card from './components/card/Card'
import Error from './components/Error';

function App() {

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/card/:username/:reponame' element={<Card /> } />
          <Route path='/error' element={<Error /> } />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;