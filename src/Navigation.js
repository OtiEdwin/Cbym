// import { ReactDOM } from "react"
import './navigation.css'
import './primitives.css'

import { logout } from './handlers/auth';
import { Link } from 'react-router-dom';

function List ({ is_logged_in,  setLoggedIn }){
    return(
        <>
            {
                is_logged_in?(
                    <ul className="navigation-list anti-responsive">
                        <li><Link to='/admin' onClick={()=>{logout( {setLoggedIn}); }}>Logout</Link></li> 
                    </ul>
                )

                :(
                    <ul className="navigation-list anti-responsive">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/feeds'>Latest</Link></li>
                        <li><Link to='/subscribe'>Subscribe</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><a href = 'https://api.whatsapp.com/send?phone=2348105966585' className="btn hollow" >Contact us</a></li>
                    </ul>
                )
            }         
        </>
       
    )

}


const Navigation = ({ doSomething, is_logged_in, setLoggedIn, style_jutsu }) => {

    return(
        <>
            <nav className={ `navigation navbar ${ style_jutsu }` }>
            <div className="ratio-9 space-btw">
                <div className="navigation-description flex">
                    <img src="logo.png" alt="CBYM-logo" className="logo"/>
                    <p className='primary title'>CBYM</p>
                </div>

                <List is_logged_in = { is_logged_in }  setLoggedIn ={setLoggedIn} />
                
                <div className="toggler relative responsive" onClick={doSomething}>
                    <div className= "slim absolute top"></div>
                    <div className="slim absolute bottom"></div>
                </div>
            </div>
            </nav>        
        </>
    )
}
export default Navigation