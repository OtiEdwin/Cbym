import Footbar from './Footbar'
import { Link } from 'react-router-dom'
import './footer.css'
import './primitives.css'


function Footer() {
    return(
        <footer className='foot col space-btw'>
            <div className='row mt-2 sub-foot page'>
                <div className='ratio-2 col ms-2'>
                    <h3><span className='primary h3'>&mdash;</span> About</h3>
                    <p className='stand-in'>All hands on deck, Let's change the fate of <span className='green p'>Ni</span>ger<span className='green p'>ia</span> &mdash; CBYM</p>
                    <Link to = '/feeds' className='btns filled'>see more &rarr;</Link>
                </div>
                <div className='ratio-2 col ms-2'>
                    <h3><span className='primary h3'>&mdash;</span> Explore</h3>

                    <ul>
                        <li><a href = {`https://api.whatsapp.com/send?phone=2348105966585&text=Hello,+i'd+like+to+make+a+donation`}>Donate</a></li>
                        <li><a href = {`https://api.whatsapp.com/send?phone=2348105966585&text=Hello,+i'd+like+to+make+more+enquires+about+CBYM+campaigns`}>Campaign</a></li>
                        <li><a href = {`https://api.whatsapp.com/send?phone=2348105966585&text=Hello,+i'd+like+to+know+more+about+CBYM+Volunteering`}>Volnteers</a></li>
                        <li><a href = "https://api.whatsapp.com/send?phone=2348105966585">Contact</a></li>
                        <li><a href = ''>Help</a></li>
                    </ul>
                </div>
                <div className='ratio-2 col ms-2 contact'>
                    <h3><span className='primary h3'>&mdash;</span> Contact</h3>
                    <ul>
                    <li className='row flex-left'>
                        <span class="material-symbols-outlined mbc primary md-36">
                        phone_in_talk
                        </span>
                        <div className='pa-l'>
                        Call Us
                        <a href = '' className='stand-out'>08105966585</a>
                        </div>
                        
                    </li>
        
                    <li className='row flex-left'>
                        <span class="material-symbols-outlined mbc primary md-36">
                        forward_to_inbox
                        </span>
                        <div className='pa-l'>
                        Reach out
                        <a href = '' className='stand-out'>Send a Mail &rarr;</a>
                        </div>
                        
                    </li>
        
                    <li className='row flex-left'>
                        <span class="material-symbols-outlined mbc primary md-36">
                        explore
                        </span>
                        <div className='pa-l'>
                        Leave a message
                        <a href = {`https://api.whatsapp.com/send?phone=2348105966585`} className='stand-out'>+234 810 596 6585</a>
                        </div>
                            
                    </li>
                    </ul>
                </div>
            </div>
            <Footbar/>
        </footer>
    )
}
export default Footer