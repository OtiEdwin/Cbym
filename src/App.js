import './App.css';
import Header from './Header';
import Feeds from './Feeds';
import Login from './Login';
import Subscribe from './Subscribe';
import Section_1 from './Section_1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Loading_Box from './Loading';
import Dialog_Box from './Dialog';
import Footer from './Footer';
import Footbar from './Footbar';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { getCookie } from './handlers/core' ; 




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
  
  const [logged_in, setLoggedIn] = useState(false);
  const [dialogue, setDialogue ] = useState('none');
  const [message, setMessage ] = useState({title:"", content:""});
  const [loading, setLoading ] = useState('none');
  const [ news, setNews ] = useState([ ]);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect( ()=>{
    //
    window.scroll(0,0);
  }, [location] );

  
  useEffect( ()=>{
    //
    if (getCookie("loggedin") === 'true'){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  }, [] );


  function dialogChange(bool, message ) {
    if (bool){
      setDialogue('initial')
      setMessage({title: message.title, content: message.content});
    }
    else{
      setDialogue('none')
      setMessage({title:"", content:""});

    }
  }


  function loadingChange(bool) {
    if (bool){
      setLoading('initial')
    }
    else{
      setLoading('none')
    }
  }

  return (
    <>

      <Routes> 
        <Route path='/' element={ <Header display = {true} is_logged_in = { logged_in } setLoggedIn ={setLoggedIn} /> }/>
        <Route path='*' element={ <Header display = {false} is_logged_in = { logged_in } setLoggedIn ={setLoggedIn} /> } /> 
        <Route path='/admin' element={ <></> } /> 
        
      </Routes>
      
      <Routes> 
        <Route 
          path='*' 
          element={ 
            <>
              <Dialog_Box dialogue = {dialogue} message = {message} cancelDialog = { ()=>{dialogChange(false, {} )} }/>
              <Loading_Box loading = {loading} />          
            </>
          }
        />
      </Routes>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/feeds' element={ <Feeds is_logged_in = { logged_in } news={news} setNews={setNews} dialogChange = { dialogChange }  loadingChange = { loadingChange } /> } />
        <Route path='/subscribe' element={ <Subscribe dialogChange = { dialogChange }  loadingChange = { loadingChange } /> } />
        <Route path='/admin' element={ <></> } />
        <Route path='/about' element={ <Section_1/> } />
        <Route path='*' element={ <Not_Found/> } />
      </Routes>

      <Routes>
        <Route path='/admin' element={ <Login dialogChange = { dialogChange }  loadingChange = { loadingChange } setLoggedIn ={setLoggedIn} navigate={navigate} /> }/>
      </Routes>

      <Routes> 
        <Route path='/admin' element={ <Footbar/> }/> 
        <Route path='*' element={ <Footer/> }/> 
      </Routes>

    </>
    
  );
}

export default App;