// import { ReactDOM } from "react"
import './navigation.css'
import './primitives.css'

const Navigation = () => {
    return(
        <>
            <nav className="navigation navbar">
            <div className="ratio-9 space-btw">
                <h2 className="navigation-description">
                    <img src="" alt="CBYM-logo" className="TraderNG"/>
                </h2>
                <ul className="navigation-list">
                    <li><a>home</a></li>
                    <li><a>log-out</a></li>
                    <li><a>sign-up</a></li>
                    <li><a>about</a></li>
                    <li><a className="btn hollow">contact us</a></li>
                </ul>
            </div>
            </nav>        
        </>
    )
}
export default Navigation