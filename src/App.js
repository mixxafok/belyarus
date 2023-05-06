import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import  AdminSystemPage  from './pages/AdminSystemPage';
import { AdminNodePage } from './pages/AdminNodePage';
import  UserPage  from './pages/UserPage';
import { OperatorPage } from './pages/OperatorPage';
import './App.css';

 const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}  />
          <Route path='/AdminSystemPage' element={<AdminSystemPage/>} />
          <Route path='/AdminNodePage' element={<AdminNodePage/>} />
          <Route  path='/UserPage' element={<UserPage/>} />
          <Route path='/OperatorPage' element={<OperatorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
