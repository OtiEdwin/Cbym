import Navigation from './Navigation';
import './primitives.css';
import React, {useState} from 'react'

function Header() {
    const [toggle, setToggle] = useState(1)

    return(
        <header>
            <Navigation doSomething={ ()=>{setToggle((toggle + 1)%2)} }/>
            <div className="toggle col primary-dark responsive" style={{ opacity: 1-toggle , transform: `translate(${ 100* toggle }%)` }}>
                <ul className='container'>
                    <div className='tr ex' onClick={ ()=>{setToggle((toggle + 1)%2)} }> <ion-icon name="close"></ion-icon> </div>
                    <li className='space-btw'>
                        <a href='#'  className='mbc'>Home</a>
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="home"></ion-icon>
                        </div>
                    </li>
                    <li className='space-btw'>
                        <a href='#'  className='mbc'>Latest</a>
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="globe"></ion-icon>
                        </div>
                    </li>
                    <li className='space-btw'>
                        <a href='#subscribe'  className='mbc'>Subscribe</a>
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="list-box"></ion-icon>
                        </div>
                    </li>
                    <li className='space-btw'>
                        <a href='#subscribe'  className='mbc'>About</a>
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="help-circle"></ion-icon>
                        </div>
                    </li>
                    <li className='space-btw'>
                        <a href='#'  className='mbc'>Admin Login</a> 
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="log-in"></ion-icon>
                        </div>
                    </li>
                    <li className='space-btw'>
                        <a href='#' className='mbc'>Add Admin</a> 
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="add"></ion-icon>
                        </div>
                    </li> 
                    <li className='space-btw'>
                        <a href='#' className='mbc'>Contact us</a>
                        <div className='nav-icon-shell flex-center'>
                            <ion-icon name="contact"></ion-icon>
                        </div>
                    </li>
                </ul>
            </div>
{/* style={{display: 'none'}} */}

            <div className='row page head' >
                <div className='ratio-5 col'>
                    <h1 className='tl'>
                    All hands on deck, Let's change the fate of <span className='green h1-alt'>Ni</span>ger<span className='h1-alt green'>ia</span>
                    </h1>
                    <hr/>
                    <h3><span className='primary h3'>C</span>ity <span className='primary h3'>B</span>oy <span className='primary h3'>Y</span>outh <span className='primary h3'>M</span>ovement</h3>          
                    <br/>  
                    <a className='btn hollow'>
                    Join us Today &rarr;
                    </a>
                </div>

                <div className='ratio-3 head ml1 relative stock-holder'>
                    <img src='stock2.jpg' alt='' className='absolute outline-alt img1'/>
                    <img src='stock1.jpg' alt='' className='absolute outline-alt img2'/>
                    <img src='stock0.jpg' alt='' className='absolute outline-alt img3'/>
                    <div className='board1 absolute'></div>
                    <div className='board2 absolute'></div>
                </div>

            </div>
        </header>
    )
}
export default Header

