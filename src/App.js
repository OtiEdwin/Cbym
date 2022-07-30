import './App.css';
import Header from './Header';
import Feeds from './Feeds';
import Login from './Login';
import Subscribe from './Subscribe';
import Section_1 from './Section_1'
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Footer from './Footer';
import React, { useState } from 'react'
import Adminify from './Adminify';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

function Home() {
  return (
    <>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_1/>

    </>
  );
}

function App() {

  let logged_in = !true

  return (
    <BrowserRouter>

      <Routes> 
        <Route path='/admin' element={ <Adminify/> }/>
      </Routes>

      <Routes> 
        <Route path='/' element={ <Header display = {true} is_logged_in = { logged_in } /> }/>
        <Route path='*' element={ <Header display = {false} is_logged_in = { logged_in } /> } /> 
      </Routes>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/feeds' element={ <Feeds is_logged_in = { logged_in } /> }/>
        <Route path='/subscribe' element={ <Subscribe/> }/>
      </Routes>

      <Routes> <Route path='*' element={ <Footer/> }/> </Routes>

    </BrowserRouter>
    
  );
}

export default App;