import React from 'react'
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';


const App = () => {
  return (
<>
<Navbar />
<Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/' element={<SignUpPage/>}></Route>
  <Route path='/' element={<LoginPage/>}></Route>
  <Route path='/' element={<SettingsPage/>}></Route>
  <Route path='/' element={<ProfilePage/>}></Route>
</Routes>
</>
  )
};

export default App;
