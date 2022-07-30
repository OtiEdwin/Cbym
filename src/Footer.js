import { Link } from 'react-router-dom'
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
                    <li><Link to = ''>Donate</Link></li>
                    <li><Link to = ''>Campaign</Link></li>
                    <li><Link to = ''>Fundraisers</Link></li>
                    <li><Link to = ''>Sponsors</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li><Link to = ''>Contact</Link></li>
                    <li><Link to = ''>Help</Link></li>
                    <li><Link to = ''>FAQs</Link></li>
                    </ul>
                </div>
                </div>
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
                    <Link to = '' className='stand-out'>09037467367</Link>
                    </div>
                    
                </li>
    
                <li className='row flex-left'>
                    <span class="material-symbols-outlined mbc primary md-36">
                    forward_to_inbox
                    </span>
                    <div className='pa-l'>
                    Send an Email
                    <Link to = '' className='stand-out'>example@email.com</Link>
                    </div>
                    
                </li>
    
                <li className='row flex-left'>
                    <span class="material-symbols-outlined mbc primary md-36">
                    explore
                    </span>
                    <div className='pa-l'>
                    Leave a message
                    <Link to = '' className='stand-out'>09037467367</Link>
                    </div>
                        
                </li>
                </ul>
            </div>
            </div>
            <div className='foot-foot row'>
            <div className='row ratio-4'>
                <div className='ratio-5 prm-background row'>
                <h3>CBYM</h3>
                </div>
                <div className='ratio-5'>
                <ul className='row'>
                    <li><Link to = ''><ion-icon name="logo-facebook" class='bg mbc hydrated white'></ion-icon></Link></li>
                    <li><Link to = ''><ion-icon name="logo-instagram" class='bg mbc hydrated white'></ion-icon></Link></li>
                    <li><Link to = ''><ion-icon name="logo-twitter" class='bg mbc hydrated white'></ion-icon></Link></li>
                    <li><Link to = ''><ion-icon name="logo-whatsapp" class='bg mbc hydrated white'></ion-icon></Link></li>
                </ul>
                </div>
            </div>
            <div className='row ratio-2'> Copyright CBYM &mdash; &copy;</div>
    
            </div>
        </footer>
    )
}
export default Footer