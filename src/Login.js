// import { ReactDOM } from "react"
// import './navigation.css'
import { useState } from 'react'
import './form.css'
import './primitives.css'

const Login = () => {
    const [ visibility, setVisibility ] = useState('eye-off')
    const [passValue, setPassValue] = useState('password')
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
    return( 
        <>
        <div className="page-full">
            <div className="form-holder col">
                <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Login to your Account</h2>

                <div className="login relative">
                    <form action="" className=" form-inner col">
                        <div className="group">
                            <h3 className=" primary-dark pl-1">LOGIN</h3>
                        </div>

                        <div className="group col">
                            <div className="input-holder col relative">
                                <label for="email" className="primary-dark label absolute">Email *</label>
                                <input type="email" name="email" id="email"/>  
                                
                                <ion-icon name="people" class="bg hydrated password left absolute"></ion-icon>                               
                            </div>

                            <div className="input-holder col relative">
                                <label for="password" class="primary-dark label absolute">Password *</label>
                                <input type={ passValue } name="password" id="password"/> 

                                <ion-icon name="key" class="bg hydrated password left absolute"></ion-icon> 
                                <div className='eye-container nav-icon-shell right absolute flex-center' onClick={setPassword}>
                                    <ion-icon name={visibility} class="bg hydrated password eye-on"></ion-icon>                                    
                                </div>                              
                               
                               
                            </div>
                            <a href="#" className="tr primary-dark label">forgot password ?</a>                             
                        </div>

                        <div className="group col">
                            <a className="gradient tc">LOGIN</a>
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