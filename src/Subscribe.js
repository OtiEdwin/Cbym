import { Link } from 'react-router-dom'
import './form.css'
import './primitives.css'

import { subscribe } from './handlers/auth';

const Subscribe = () => {
    function register(e) {
        e.preventDefault();
        console.log('registering');

        let email = document.getElementById('email').value;
        let firstname = document.getElementById('first-name').value;
        let lastname = document.getElementById('last-name').value;

        subscribe(email, firstname, lastname,  {});
    }

    return(
        <>
            <div className="page-full" id = 'subscribe'>
                <div className="form-holder col">
                    <h2 className='tc mc head-text-alt'><span className='dark h2'>&mdash;</span> Subscribe to our Newsletter</h2>

                    <div className="login relative">
                        <form method='post' className=" form-inner col">
                            <div className="group">
                                <h3 className=" primary-dark pl-1">REGISTER</h3>
                            </div>

                            <div className="group col">
                                <div className="input-holder col relative">
                                    <label htmlFor="email" className="primary-dark label absolute">Email *</label>
                                    <input type="email" name="email" id="email" required/>  
                                    
                                    <ion-icon name="people" class="bg hydrated password left absolute"></ion-icon>                               
                                </div>

                                <div className="input-holder col relative">
                                    <label htmlFor="first-name" class="primary-dark label absolute"> First Name *</label>
                                    <input type="text" name="first name" id="first-name" required/> 
                                    <ion-icon name="create" class="bg hydrated password right absolute"></ion-icon>                             
                                </div>

                                <div className="input-holder col relative">
                                    <label htmlFor="last-name" class="primary-dark label absolute"> last Name *</label>
                                    <input type="text" name="last name" id="last-name" required/>  
                                    <ion-icon name="create" class="bg hydrated password right absolute"></ion-icon>                             
                                </div>

                                <Link to = "/feeds" className="tr primary-dark label underline">Registered Already ?</Link>                             
                            </div>

                            <div className="group col">
                                <button className="gradient tc" onClick={ register }>REGISTER</button>
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

export default Subscribe