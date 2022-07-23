import Navigation from './Navigation';
import './primitives.css';

function Header() {
    return(
        <header>
            <Navigation/>
            {/* <ul className=" toggle col " >
                <li><a>home</a></li>
                <li><a>log-out</a></li>
                <li><a>sign-up</a></li>
                <li><a>about</a></li>
                <li><a>contact us</a></li>
            </ul> */}

            <div className='row page head'>
                <div className='ratio-5 col'>
                    <h1 className='tl'>
                    All hands on deck, Let's change the fate of <span className='green h1-alt'>Ni</span>ger<span className='h1-alt green'>ia</span>
                    </h1>
                    <hr/>
                    <h3><span className='primary h3'>C</span>ity <span className='primary h3'>B</span>oy <span className='primary h3'>Y</span>outh <span className='primary h3'>M</span>ovement</h3>          
                    <br/>  
                    <a className='btn hollow'>
                    Join us Today &rarr;
                    </a>
                </div>

                <div className='ratio-3 head ml1 relative stock-holder'>
                    <img src='stock0.jpeg' alt='' className='absolute outline-alt img1'/>
                    <img src='stock1.jpeg' alt='' className='absolute outline-alt img2'/>
                    <img src='stock2.jpeg' alt='' className='absolute outline-alt img3'/>
                    <div className='board1 absolute'></div>
                    <div className='board2 absolute'></div>
                </div>

            </div>
        </header>
    )
}
export default Header

