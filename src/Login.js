// import { ReactDOM } from "react"
// import './navigation.css'
import { useState } from 'react'
import './form.css'
import './primitives.css'

const Login = ({is_logged_in}) => {
    const [ visibility, setVisibility ] = useState('eye-off')
    const [passValue, setPassValue] = useState('password')
    let list_value = is_logged_in?'logout':''


    function setPassword(){
        if(visibility == 'eye-off'){
            setVisibility('eye')
        }
        else{
            setVisibility('eye-off')
        }
        

        if(passValue=='password'){
            setPassValue('passcode')
        }
        else{
            setPassValue('password')
        }
    }

    function signin(){
        console.log('signing in')
    }

    return( 
        <>
            <nav className={ `ms-2` }>
                <div className="ratio-9 space-btw">
                    <div className="navigation-description flex">
                        <img src="logo.jpg" alt="CBYM-logo" className="logo"/>
                        <h4 className=' mbc primary-dark'>CBYM &mdash; admin</h4>
                    </div>
                </div>
            </nav> 

        <div className="page-full">
            <div className="form-holder col">
                <h2 className='tc mc head-text-alt'><span className='dark h2'>&mdash;</span> Login to your Account</h2>

                <div className="login relative">
                    <form method='post' className=" form-inner col">
                        <div className="group">
                            <h3 className=" primary-dark pl-1">LOGIN</h3>
                        </div>

                        <div className="group col">
                            <div className="input-holder col relative">
                                <label htmlFor="password" class="primary-dark label absolute">Admin Key *</label>
                                <input type={ passValue } name="password" id="password" required/> 

                                <ion-icon name="key" class="bg hydrated password left absolute"></ion-icon> 
                                <div className='eye-container nav-icon-shell right absolute flex-center' onClick={setPassword}>
                                    <ion-icon name={visibility} class="bg hydrated password eye-on"></ion-icon>                                    
                                </div>                              
                               
                               
                            </div>
                            <a href="#" className="tr primary-dark label underline">forgot Key ?</a>                             
                        </div>

                        <div className="group col">
                            <button className="gradient tc" onClick={ signin() }>LOGIN</button>
                        </div>

                        <div className="or relative">
                        <div className="line"></div>
                        </div> 
                    </form>
                </div>
            </div>
        </div>        
        </>
    )
}
export default Login