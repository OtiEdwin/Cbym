import { Link } from 'react-router-dom'
import './footer.css'
import './primitives.css'


function Footbar() {
    return(
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
                        <li><a href = {`https://api.whatsapp.com/send?phone=2348105966585`}><ion-icon name="logo-whatsapp" class='mbc hydrated white'></ion-icon></a></li>
                    </ul>
                </div>
            </div>
            <div className='row ratio-2'> Copyright CBYM &mdash; &copy;</div>
        </div>
    )
}
export default Footbar