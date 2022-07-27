// import { ReactDOM } from "react"
// import './navigation.css'
import './form.css'
import './primitives.css'

const Login = () => {
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
                                
                                <ion-icon name="people" className="md hydrated password left absolute"></ion-icon>                               
                            </div>

                            <div className="input-holder col relative">
                                <label for="password" className="primary-dark label absolute">Password *</label>
                                <input type="password" name="password" id="password"/> 

                                <ion-icon name="key" className="md hydrated password left absolute"></ion-icon>                               
                                <ion-icon name="eye" className="md hydrated password eye-on right absolute"></ion-icon>                               
                                <ion-icon name="eye-off" className="md hydrated password eye-off right absolute"></ion-icon>                               
                            </div>
                            <a href="#" className="tr primary-dark label">forgot password ?</a>                             
                        </div>

                        <div className="group col">
                            <a className="gradient tc">LOGIN</a>
                        </div>

                        <div className="or relative">
                        <div className="line"></div>
                        <p className="tc primary-dark absolute or-text"> or </p>                                
                        </div> 

                    </form>
                </div>
            </div>
        </div>        
        </>
    )
}
export default Login