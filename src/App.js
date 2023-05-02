import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminSystemPage from './pages/AdminSystemPage'
import UserPage from './pages/UserPage';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}  />
          <Route path='/AdminPage' element={<AdminSystemPage/>} />
          <Route path='/UserPage' element={<UserPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
