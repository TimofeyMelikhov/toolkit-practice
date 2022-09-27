import classes from './App.module.css';
import React from 'react';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
