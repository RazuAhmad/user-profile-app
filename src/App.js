import React from 'react';
import "./App.css";
import UserProfileForm from './Components/UserProfileForm/UserProfileForm';
import { Route, Routes } from 'react-router-dom';
import UpdateUserProfile from './Components/UpdateUserProfile/UpdateUserProfile';
import NavigationBar from './Components/Navbar/Navbar';
import AllUsers from './Components/AllUsers/AllUsers';

function App() {
  return (
<div className='gradient__bg'>
  <NavigationBar/>
<Routes >
      <Route path='/' element={<UserProfileForm/>} />
      <Route path='/home' element={<UserProfileForm/>} />
      <Route path='/updateUserProfile/:id' element={<UpdateUserProfile/>} />
      <Route path='/allUsers' element={<AllUsers/>} />
    </Routes>
</div>
    
  )
}

export default App