// import { ReactDOM } from "react"
// import './navigation.css'
import './form.css'
import './primitives.css'

const Login = () => {
    return(
        <>
        <div className="page-full">
            <div className="form-holder col">
                <h1 className="h1-alt tc fade-in">
                    Login to <span className="outline">TraderNG</span>
                </h1>
                <div className="form mc row">
                    <div className="login relative">
                        <form action="" className=" form-inner col">
                            <div className="group">
                                <h3 className=" primary-dark">LOGIN</h3>
                            </div>

                            <div className="group col">
                                <div className="input-holder col relative">
                                    <label for="email" className="primary-dark label absolute">Email *</label>
                                    <input type="email" name="email" id="email" placeholder="Type your email"/>  
                                    
                                    <ion-icon name="people" className="md hydrated password left absolute"></ion-icon>                               
                                </div>

                                <div className="input-holder col relative">
                                    <label for="password" className="primary-dark label absolute">Password *</label>
                                    <input type="password" name="password" id="password" placeholder="Type your password"/> 

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

                            <div className="row space-btw ratio-3">
                                <div className="social-alt fb-alt"><ion-icon name="logo-facebook" className="md hydrated icons-alt fill-alt mc"/></div>
                                <div className="social-alt ig-alt"><ion-icon name="logo-google" className="md hydrated icons-alt mc"/></div>                               
                            </div>
 

                        </form>
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}
export default Login