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
                        <li><a href = {`https://api.whatsapp.com/send?phone=2347039339152&text=Hello,+i'd+like+to+make+a+donation`}>Donate</a></li>
                        <li><a href = {`https://api.whatsapp.com/send?phone=2347039339152&text=Hello,+i'd+like+to+make+more+enquires+about+CBYM+campaigns`}>Campaign</a></li>
                        <li><a href = {`https://api.whatsapp.com/send?phone=2347039339152&text=Hello,+i'd+like+to+know+more+about+CBYM+Volunteering`}>Volnteers</a></li>
                        <li><a href = "https://api.whatsapp.com/send?phone=2347039339152">Contact</a></li>
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
                        <a href = '' className='stand-out'>07039339152</a>
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
                        <a href = {`https://api.whatsapp.com/send?phone=2347039339152`} className='stand-out'>+234 703 933 9152</a>
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
                            <li><a href = ''><ion-icon name="logo-facebook" class='mbc hydrated white'></ion-icon></a></li>
                            <li><a href = ''><ion-icon name="logo-instagram" class='mbc hydrated white'></ion-icon></a></li>
                            <li><a href = ''><ion-icon name="logo-twitter" class='mbc hydrated white'></ion-icon></a></li>
                            <li><a href = {`https://api.whatsapp.com/send?phone=2347039339152`}><ion-icon name="logo-whatsapp" class='mbc hydrated white'></ion-icon></a></li>
                        </ul>
                    </div>
                </div>
                <div className='row ratio-2'> Copyright CBYM &mdash; &copy;</div>
    
            </div>
        </footer>
    )
}
export default Footer