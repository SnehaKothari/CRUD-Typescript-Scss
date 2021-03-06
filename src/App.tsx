import React from 'react';
import { Fragment,useState,useEffect } from 'react';
import './App.scss';
import Navbar from './Components/Layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Pages/Home/Home';
import {EditUser} from './Components/Pages/UserFunction/EditUser';
import { UserProps } from './Components/Props/User';
import {AddUser} from './Components/Pages/AddUser/AddUser'
import {ViewUser} from './Components/Pages/UserFunction/ViewUser';
import {About} from './Components/Layout/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    Hello
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route  path='/addUsers/' element={<AddUser/>}/>
      <Route path="/editusers/:id" element={<EditUser/>}/>
      <Route  path='/users/:id' element={<ViewUser/>}/>
      <Route  path="/users/:id/editusers/:id" element={<EditUser/>}/>
      <Route  path='/about' element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
