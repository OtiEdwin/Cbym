import './footer.css'
import './primitives.css'


function Footer() {
    return(
        <footer className='foot col space-btw'>
            <div className='row'>
            <div className='ratio-2 col ms-2'>
                <h3><span className='primary h3'>&mdash;</span> About</h3>
                <p className='stand-in'>this is a brief description of what CBYM is about</p>
                <a className='btns filled'>see more &rarr;</a>
            </div>
            <div className='ratio-2 col ms-2'>
                <h3><span className='primary h3'>&mdash;</span> Explore</h3>
                <div className='row space-btw two'>
                <div>
                    <ul>
                    <li>Donate</li>
                    <li>Campaign</li>
                    <li>Fundraisers</li>
                    <li>Fundraisers</li>
                    <li>Sponsors</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li>Contact</li>
                    <li>Help</li>
                    <li>FAQs</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='ratio-2 col ms-2 contact'>
                <h3><span className='primary h3'>&mdash;</span> Contact</h3>
                <ul>
                <li className='row flex-left'>
                    {/* <span class="material-symbols-outlined mbc primary md-36">
                    phone_in_talk
                    </span> */}
                    <div className='pa-l'>
                    Call Us
                    <p className='stand-out'>09037467367</p>
                    </div>
                    
                </li>
    
                <li className='row flex-left'>
                    {/* <span class="material-symbols-outlined mbc primary md-36">
                    forward_to_inbox
                    </span> */}
                    <div className='pa-l'>
                    Send an Email
                    <p className='stand-out'>example@email.com</p>
                    </div>
                    
                </li>
    
                <li className='row flex-left'>
                    {/* <span class="material-symbols-outlined mbc primary md-36">
                    explore
                    </span> */}
                    <div className='pa-l'>
                    Leave a message
                    <p className='stand-out'>09037467367</p>
                    </div>
                        
                </li>
                </ul>
            </div>
            </div>
            <div className='foot-foot row'>
            <div className='row ratio-2'>
                <div className='ratio-5 prm-background row'>
                <h3>CBYM</h3>
                </div>
                <div className='ratio-5'>
                <ul className='row'>
                    <li><ion-icon name="logo-facebook" class='md hydrated white'></ion-icon></li>
                    <li><ion-icon name="logo-instagram" class='md hydrated white'></ion-icon></li>
                    <li><ion-icon name="logo-twitter" class='md hydrated white'></ion-icon></li>
                    <li><ion-icon name="logo-whatsapp" class='md hydrated white'></ion-icon></li>
                </ul>
                </div>
            </div>
            <div className='row ratio-2'> Copyright CBYM &mdash; &copy;</div>
    
            </div>
        </footer>
    )
}
export default Footer