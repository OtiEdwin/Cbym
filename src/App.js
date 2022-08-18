import './App.css';
import Header from './Header';
import Feeds from './Feeds';
import Login from './Login';
import Subscribe from './Subscribe';
import Section_1 from './Section_1'
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Loading_Box from './Loading';
import Dialog_Box from './Dialog';
import Footer from './Footer';
import Footbar from './Footbar';
import React, { useState } from 'react'
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

    </>
  );
}

function Not_Found() {
  return (
    <section className="page col">
           
        <div className="row relative  gray-background">
            <div className='col'>
              <h2 className='tc mc head-text-alt'>Error</h2>
              <h3 className='primary-dark pl-1'>404 : Page not found</h3>
              <p>This means your url may be misspelled or broken.</p>              
            </div>

          
        </div>

    </section>
  );
}



function App() {
  const [logged_in, setLoggedIn] = useState(!true);
  const [dialogue, setDialogue ] = useState('none')
  const [loading, setLoading ] = useState('none')

  function dialogChange() {
    if (dialogue === 'none'){
      setDialogue('initial')
    }
    else{
      setDialogue('none')
    }
  }

  function loadingChange() {
    if (loading === 'none'){
      setLoading('initial')
    }
    else{
      setLoading('none')
    }
  }

  return (
    <BrowserRouter>

      <Routes> 
        <Route path='/' element={ <Header display = {true} is_logged_in = { logged_in } /> }/>
        <Route path='*' element={ <Header display = {false} is_logged_in = { logged_in } /> } /> 
        <Route path='/admin' element={ <></> } /> 
        
      </Routes>
      
      <Routes> 
        <Route 
          path='*' 
          element={ 
            <>
              <Dialog_Box dialogue = {dialogue} dialogChange = { dialogChange }/>
              <Loading_Box loading = {loading} loadingChange = { loadingChange }/>          
            </>
          }
        />
      </Routes>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/feeds' element={ <Feeds is_logged_in = { logged_in } /> } />
        <Route path='/subscribe' element={ <Subscribe/> } />
        <Route path='/admin' element={ <></> } />
        <Route path='/about' element={ <Section_1/> } />
        <Route path='*' element={ <Not_Found/> } />
      </Routes>

      <Routes>
        <Route path='/admin' element={ <Login/> }/>
      </Routes>

      <Routes> 
        <Route path='/admin' element={ <Footbar/> }/> 
        <Route path='*' element={ <Footer/> }/> 
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;