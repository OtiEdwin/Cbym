// import { ReactDOM } from "react"
import './navigation.css'
import './primitives.css'

import { Link } from 'react-router-dom';

function List ({ is_logged_in }){
    return(
        <>
            {
                is_logged_in?(
                    <ul className="navigation-list anti-responsive">
                        <li><Link to='/home'>Posts</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/home'>Logout</Link></li> 
                        <li><Link to='/'>Add Admin</Link></li> 
                    </ul>
                )

                :(
                    <ul className="navigation-list anti-responsive">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/home'>Latest</Link></li>
                        <li><Link to='Signup'>Subscribe</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/Login'>Admin Login</Link></li> 
                        <li><Link to='/' className="btn hollow" >Contact us</Link></li>
                    </ul>
                )
            }         
        </>
       
    )

}


const Navigation = ({ doSomething, is_logged_in, style_jutsu }) => {

    return(
        <>
            <nav className={ `navigation navbar ${ style_jutsu }` }>
            <div className="ratio-9 space-btw">
                <div className="navigation-description">
                    <img src="" alt="CBYM-logo" className=""/>
                </div>

                <List is_logged_in = { is_logged_in } />
                
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