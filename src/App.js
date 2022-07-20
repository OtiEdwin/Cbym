import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <>
    <header>
      <Navigation/>

      <div className='row page head'>
        <div className='ratio-5 col'>
          <h1 className='tl'>
            All hands on deck, Let's change the fate of <span className='green h1-alt white-background'>Ni</span>ger<span className='green h1-alt white-background'>ia</span>
          </h1>
          <hr/>
          <h3><span className='primary h3'>C</span>ity <span className='primary h3'>B</span>oy <span className='primary h3'>Y</span>outh <span className='primary h3'>M</span>ovement</h3>          
          <br/>  
          <a className='btn hollow'>
            Join us Today &rarr;
          </a>
        </div>

        <div className='ratio-3 head ml1 relative'>
          <img src='stock0.jpeg' alt='' className='absolute outline img1'/>
          <img src='stock1.jpeg' alt='' className='absolute outline img2'/>
          <img src='stock2.jpeg' alt='' className='absolute outline img3'/>
          <div className='board1 absolute'></div>
          <div className='board2 absolute'></div>
        </div>

      </div>
    </header>
    <section className='ratio-9 col'>
      <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Make a Choice</h2>
      <div className='row'>
        <div className='card prm-background ratio-3'>
          <span class="material-symbols-outlined mbc primary md-72 tc">
          thumbs_up_down
          </span>
          <h3 className='tc'>A Better Future</h3>
          <p>
            this is where the inspirational text goes, Let's inspire one another.
          </p>
          <a className='btn pill tc'>Let's go &rarr;</a>
        </div>

        <div className='card sec-background ratio-3'>
          <span class="material-symbols-outlined mbc primary md-72 tc">
          groups_2
          </span>
          <h3 className='tc'>Let's Unite</h3>
          <p>
            this is where the inspirational text goes, Let's inspire one another.
          </p>
          <a className='btn pill tc'>Let's go &rarr;</a>
        </div>

        <div className='card ter-background ratio-3'>
          <span class="material-symbols-outlined mbc primary md-72 tc">
          connect_without_contact
          </span>

          <h3 className='tc'>A Safe Space</h3>
          <p>
            this is where the inspirational text goes, Let's inspire one another.
          </p>
          <a className='btn pill tc'>Let's go &rarr;</a>
        </div>
      </div>

    </section>

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
              <span class="material-symbols-outlined mbc primary md-36">
              phone_in_talk
              </span>
              <div className='pa-l'>
                <h4>Call Us</h4>
                <p className='stand-out'>09037467367</p>
              </div>
              
            </li>

            <li className='row flex-left'>
              <span class="material-symbols-outlined mbc primary md-36">
              forward_to_inbox
              </span>
              <div className='pa-l'>
                <h4>Send an Email</h4>
                <p className='stand-out'>example@email.com</p>
              </div>
              
            </li>

            <li className='row flex-left'>
              <span class="material-symbols-outlined mbc primary md-36">
              explore
              </span>
              <div className='pa-l'>
                <h4>Leave a message</h4>
                <p className='stand-out'>09037467367</p>
              </div>
                  
            </li>
          </ul>
        </div>
        <div className='ratio-2 col ms-2'>
          <h3><span className='primary h3'>&mdash;</span> Subscribe</h3>
          <p className='stand-in'>Subscribe to our newsletter here</p>
          <div className='input-holder relative'>
            <input type='email' placeholder='Email' className='input'/>  
            <a className='btns absolute inner'>register</a>          
          </div>

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
    </>
    
  );
}

export default App;