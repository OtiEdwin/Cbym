// import { ReactDOM } from "react"
// import './navigation.css'
import './form.css'
import './primitives.css'

const Signup = () => {
    return(
        <>
        <div className="page-full" id = 'subscribe'>
            <div className="form-holder col">
                <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Subscribe to our Newsletter</h2>

                <div className="login relative">
                    <form action="" className=" form-inner col">
                        <div className="group">
                            <h3 className=" primary-dark pl-1">Register</h3>
                        </div>

                        <div className="group col">
                            <div className="input-holder col relative">
                                <label for="email" className="primary-dark label absolute">Email *</label>
                                <input type="email" name="email" id="email" />  
                                
                                <ion-icon name="people" class="bg hydrated password left absolute"></ion-icon>                               
                            </div>

                            <div className="input-holder col relative">
                                <label for="full-name" class="primary-dark label absolute"> Full Name *</label>
                                <input type="text" name="full name" id="full-name"/> 
                                <ion-icon name="create" class="bg hydrated password right absolute"></ion-icon>                             
                            </div>

                            <div className="input-holder col relative">
                                <label for="last-name" class="primary-dark label absolute"> last Name *</label>
                                <input type="text" name="last name" id="last-name"/>  
                                <ion-icon name="create" class="bg hydrated password right absolute"></ion-icon>                             
                            </div>

                            <a href="#home" className="tr primary-dark label">Registered Already ?</a>                             
                        </div>

                        <div className="group col">
                            <a className="gradient tc">REGISTER</a>
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
export default Signup