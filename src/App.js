import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { AdminSystemPage } from './pages/AdminSystemPage';
import { AdminNodePage } from './pages/AdminNodePage';
import { UserPage }   from './pages/UserPage';
import { OperatorPage } from './pages/OperatorPage';
import './App.css';


 const App = () => {
  const [LoginPassword,setLoginPassword] = useState()
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login LoginPassword={LoginPassword} setLoginPassword={setLoginPassword}/>}  />
          <Route path='/AdminSystemPage' element={<AdminSystemPage LoginPassword={LoginPassword} setLoginPassword={setLoginPassword}/> } />
          <Route path='/AdminNodePage' element={<AdminNodePage LoginPassword={LoginPassword} setLoginPassword={setLoginPassword}/>} />
          <Route  path='/UserPage' element={<UserPage LoginPassword={LoginPassword} setLoginPassword={setLoginPassword}/>} />
          <Route path='/OperatorPage' element={<OperatorPage LoginPassword={LoginPassword} setLoginPassword={setLoginPassword}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
