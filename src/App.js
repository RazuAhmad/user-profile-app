import React from 'react';
import "./App.css";
import UserProfileForm from './Components/UserProfileForm/UserProfileForm';
import { Route, Routes } from 'react-router-dom';
import UpdateUserProfile from './Components/UpdateUserProfile/UpdateUserProfile';
import NavigationBar from './Components/Navbar/Navbar';
import AllUsers from './Components/AllUsers/AllUsers';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
<div className='gradient-background'>
  <NavigationBar/>
<Routes >
      <Route path='/' element={<UserProfileForm/>} />
      <Route path='/home' element={<UserProfileForm/>} />
      <Route path='/updateUserProfile/:id' element={<UpdateUserProfile/>} />
      <Route path='/allUsers' element={<AllUsers/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
    </Routes>
</div>
    
  )
}

export default App