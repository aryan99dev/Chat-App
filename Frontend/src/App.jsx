import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './Store/useAuthStore';

const App = () => {
  const { authUser , checkAuth } = useAuthStore(); 

  useEffect (() => {
    checkAuth();
  }, [checkAuth]);

  console.log( {authUser});

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/settings' element={<SettingsPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </>
  )
};

export default App;
