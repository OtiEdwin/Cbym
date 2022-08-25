import { Link } from 'react-router-dom'
import './form.css'
import './primitives.css'

import { subscribe as subscribeHandler } from './handlers/auth';

const Subscribe = ({loadingChange, dialogChange}) => {

    async function register(e){
        // e.preventDefault();
        console.log('subscribing...');

        let email = document.getElementById('email').value,
            firstname = document.getElementById('first-name').value,
            lastname = document.getElementById('last-name').value;

        loadingChange(true);
        await subscribeHandler( email, firstname, lastname, { dialogChange } );
        loadingChange(false);

        //clear
        document.getElementById('email').value = "";
        document.getElementById('first-name').value = "";
        document.getElementById('last-name').value = "";
    }

    return(
        <>
        <div className="page-full" id = 'subscribe'>
            <div className="form-holder col">
                <h2 className='tc mc head-text-alt'><span className='dark h2'>&mdash;</span> Subscribe to our Newsletter</h2>

                <div className="login relative">
                    <form action="" className=" form-inner col" onSubmit={register}>
                        <div className="group">
                            <h3 className=" primary-dark pl-1">REGISTER</h3>
                        </div>

                        <div className="group col">
                            <div className="input-holder col relative">
                                <label htmlFor="email" className="primary-dark label absolute">Email *</label>
                                <input type="email" name="email" id="email" />  
                                
                                <ion-icon name="people" class="bg hydrated password left absolute"></ion-icon>                               
                            </div>

                            <div className="input-holder col relative">
                                <label htmlFor="first-name" class="primary-dark label absolute"> First Name *</label>
                                <input type="text" name="first name" id="first-name"/> 
                                <ion-icon name="create" class="bg hydrated password right absolute"></ion-icon>                             
                            </div>

                            <div className="input-holder col relative">
                                <label htmlFor="last-name" class="primary-dark label absolute"> last Name *</label>
                                <input type="text" name="last name" id="last-name"/>  
                                <ion-icon name="create" class="bg hydrated password right absolute"></ion-icon>                             
                            </div>

                            <Link to = "/feeds" className="tr primary-dark label underline">Registered Already ?</Link>                             
                        </div>

                        <div className="group col">
                            <button className="gradient tc">REGISTER</button>
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