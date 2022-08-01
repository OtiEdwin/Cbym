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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/feeds'>Posts</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/admin'>Logout</Link></li> 
                    </ul>
                )

                :(
                    <ul className="navigation-list anti-responsive">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/feeds'>Latest</Link></li>
                        <li><Link to='/subscribe'>Subscribe</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/admin'>Admin</Link></li> 
                        <li><a href = 'https://api.whatsapp.com/send?phone=2347039339152' className="btn hollow" >Contact us</a></li>
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