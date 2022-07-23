// import { ReactDOM } from "react"
import './navigation.css'
import './primitives.css'

const Navigation = () => {
    return(
        <>
            <nav className="navigation navbar">
            <div className="ratio-9 space-btw">
                <div className="navigation-description">
                    <img src="" alt="CBYM-logo" className=""/>
                </div>
                <ul className="navigation-list anti-responsive">
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>Latest</a></li>
                    <li><a href='#subscribe'>Subscribe</a></li>
                    <li><a href='#subscribe'>about</a></li>
                    <li><a className="btn hollow" href='#foot'>contact us</a></li>
                </ul>
                <div className="toggler relative responsive">
                    <div className= "slim absolute top"></div>
                    <div className="slim absolute bottom"></div>
                </div>
            </div>
            </nav>        
        </>
    )
}
export default Navigation