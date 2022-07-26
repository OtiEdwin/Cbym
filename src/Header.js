import Navigation from './Navigation';
import './primitives.css';
import React, { useState } from 'react'
import { logout } from './handlers/auth';
import { Link } from 'react-router-dom';


function Header({ is_logged_in, display,  setLoggedIn }) {
    const [ toggle, setToggle ] = useState(1)

    return(
        <header>
            <Navigation doSomething = { ()=>{setToggle((toggle + 1)%2)} } is_logged_in = { is_logged_in }  setLoggedIn ={setLoggedIn}/>

            {
                is_logged_in?( 
                    <div className="toggle col primary-dark responsive" style={{ opacity: 1-toggle , transform: `translate(${ 100* toggle }%)` }}>
                        <ul className='container'>
                            <div className='tr ex' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                <div className='nav-icon-shell-alt flex-center'>
                                    <ion-icon name="close"></ion-icon>
                                </div> 
                            
                            </div>

                            <li className=''>
                                <Link to='/admin'  className='mbc space-btw' onClick={ ()=>{setToggle((toggle + 1)%2); logout( {setLoggedIn}) } }>
                                    Logout
                                    <div className=' flex-center'>
                                        <ion-icon name="log-in"></ion-icon>
                                    </div>                        
                                </Link> 

                            </li>
        
                        </ul>
                    </div>                    
                )
                :(
                    <div className="toggle col primary-dark responsive" style={{ opacity: 1-toggle , transform: `translate(${ 100* toggle }%)` }}>
                        <ul className='container'>
                            <div className='tr ex' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                <div className='nav-icon-shell-alt flex-center'>
                                    <ion-icon name="close"></ion-icon>
                                </div> 
                            
                            </div>
                            <li className=''>
                                <Link to='/' className='mbc space-btw' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                    Home
                                    <div className=' flex-center'>
                                        <ion-icon name="home"></ion-icon>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link to='/feeds'  className='mbc space-btw' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                    Latest
                                    <div className=' flex-center'>
                                        <ion-icon name="globe"></ion-icon>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link to='/subscribe'  className='mbc space-btw' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                    Subscribe
                                    <div className=' flex-center'>
                                        <ion-icon name="paper-plane"></ion-icon>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link to='/about'  className='mbc space-btw' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                    About
                                    <div className=' flex-center'>
                                        <ion-icon name="help-circle"></ion-icon>
                                    </div>
                                </Link>
                            </li>
        
                            <li className=''>
                                <a href = 'https://api.whatsapp.com/send?phone=2348105966585' className='mbc space-btw' onClick={ ()=>{setToggle((toggle + 1)%2)} }>
                                    Contact us
                                    <div className=' flex-center'>
                                        <ion-icon name="call"></ion-icon>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                )
                
            }
            

            
            {
                display?(
                    <div className={`row page head `}>
                        <div className='ratio-5 col'>
                            <h1 className='tl'>
                            All hands on deck, Let's change the fate of <span className='green h1-alt'>Ni</span>ger<span className='h1-alt green'>ia</span>
                            </h1>
                            <hr/>
                            <h3><span className='primary h3'>C</span>ity <span className='primary h3'>B</span>oy <span className='primary h3'>Y</span>outh <span className='primary h3'>M</span>ovement</h3>          
                            <br/>  
                            <Link to = '/subscribe' className='btn hollow'>Join us Today &rarr;</Link>
                        </div>

                        <div className='ratio-3 head ml1 relative stock-holder'>
                            <img src='stock2.jpg' alt='' className='absolute outline-alt img1'/>
                            <img src='stock8.png' alt='' className='absolute outline-alt img2'/>
                            <img src='stock0.jpg' alt='' className='absolute outline-alt img3'/>
                            <img src='young.jpg' alt='' className='absolute outline-alt img0 anti-responsive'/>
                            <div className='board1 absolute'></div>
                            <div className='board2 absolute'></div>
                        </div>
                    </div>                    
                )   
                :<></>
            }
            

        </header>
    )
}


export default Header;