import { useState } from 'react'
import './form.css'
import './primitives.css'

const Login = ({is_logged_in}) => {
    const [ visibility, setVisibility ] = useState('eye-off')
    const [passValue, setPassValue] = useState('password')


    function setPassword(){
        if(visibility === 'eye-off'){
            setVisibility('eye')
        }
        else{
            setVisibility('eye-off')
        }
        

        if(passValue ==='password'){
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
                        <h4 className=' mbc primary-dark'>CBYM</h4>
                    </div>
                </div>
            </nav> 

        <div className="page-full login-page">
            <div className="form-holder col">
                <h2 className='tc mc head-text-alt'>Login to your Account</h2>

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