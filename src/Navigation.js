// import { ReactDOM } from "react"
import './navigation.css'
import './primitives.css'

const Navigation = ({doSomething}) => {
    return(
        <>
            <nav className="navigation navbar">
            <div className="ratio-9 space-btw">
                <div className="navigation-description">
                    <img src="" alt="CBYM-logo" className=""/>
                </div>
                <ul className="navigation-list anti-responsive">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Latest</a></li>
                    <li><a href='#subscribe'>Subscribe</a></li>
                    <li><a href='#subscribe'>About</a></li>
                    <li><a href='#'>Admin Login</a></li> 
                    <li><a href='#'>Add Admin</a></li> 
                    <li><a className="btn hollow" href='#foot'>Contact us</a></li>
                </ul>

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