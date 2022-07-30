import { Link } from 'react-router-dom'
import './footer.css'
import './primitives.css'


function Footer() {
    return(
        <footer className='foot col space-btw'>
            <div className='row mt-2'>
            <div className='ratio-2 col ms-2'>
                <h3><span className='primary h3'>&mdash;</span> About</h3>
                <p className='stand-in'>All hands on deck, Let's change the fate of <span className='green'>Ni</span>ger<span className='green'>ia</span> &mdash; CBYM</p>
                <Link to = '/feeds' className='btns filled'>see more &rarr;</Link>
            </div>
            <div className='ratio-2 col ms-2'>
                <h3><span className='primary h3'>&mdash;</span> Explore</h3>
                <div className='row space-btw two'>
                <div>
                    <ul>
                    <li><Link to = {`https://api.whatsapp.com/send?phone=2347039339152&text=Hello,+i'd+like+to+make+a+donation`}>Donate</Link></li>
                    <li><Link to = {`https://api.whatsapp.com/send?phone=2347039339152&text=Hello,+i'd+like+to+make+more+enquires+about+CBYM+campaigns`}>Campaign</Link></li>
                    <li><Link to = {`https://api.whatsapp.com/send?phone=2347039339152&text=Hello,+i'd+like+to+know+more+about+CBYM+fundraisers`}>Fundraisers</Link></li>
                    <li><Link to = ''>Sponsors</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li><Link to = {`https://api.whatsapp.com/send?phone=2347039339152`}>Contact</Link></li>
                    <li><Link to = ''>Help</Link></li>
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
                    <Link to = '' className='stand-out'>07039339152</Link>
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
                    <Link to = {`https://api.whatsapp.com/send?phone=2347039339152`} className='stand-out'>+234 703 933 9152</Link>
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
                    <li><Link to = {`https://api.whatsapp.com/send?phone=2347039339152`}><ion-icon name="logo-whatsapp" class='bg mbc hydrated white'></ion-icon></Link></li>
                </ul>
                </div>
            </div>
            <div className='row ratio-2'> Copyright CBYM &mdash; &copy;</div>
    
            </div>
        </footer>
    )
}
export default Footer