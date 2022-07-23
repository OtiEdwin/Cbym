import './App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Section_1 from './Section_1'
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Footer from './Footer';


function App() {
  return (
    <>
      <Header/>
      {/* <Home/> */}
      {/* <Section_1/> */}
      <Section_2/>
      <Section_3/>
      <Section_4/>
      {/* <Login/> */}
      <Signup/>
      <Footer/>
    </>
    
  );
}

export default App;