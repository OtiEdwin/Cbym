import { Link } from 'react-router-dom'
import './primitives.css'

function Section_1() {
    return(
        <section className='ratio-9 col'>
            <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span>Let's Make a Choice</h2>
            <div className='alt-5'>
                <p>
                    Yes!<br/> Since you are here then you either know what the purpose of this platform or you are looking to find out what we are all about.
                    If your being here implies you already knowing the purpose of this platform, Then very much like me, You are a supporter of <span className='primary-dark pee'>Sir Asiwaju Bola Ahmed Tinubu</span>, A great man and a philantropist.<br/>
                    Also, it may be the case that you are somewhat unsure of your choices on who to decide to be the next leader of our great nation. If so, then this is also the place for you. A place where you can get unfiltered information on our coming president 2023.<hr/>
                    <span className='primary-dark pee'>CBYM</span> offers a safe space for we the supporters throughout this campaign and election. A platform free of social media prosecution and/or cyber bullying for our choice for a leader and our ideals.<br/> 
                    So join us today, Join the movement, Join the <span className='primary-dark pee'>C</span>ity <span className='primary-dark pee'>B</span>oy <span className='primary-dark pee'>Y</span>outh <span className='primary-dark pee'>M</span>ovement.<br/>
                    Lets change the fate of <span className='green pee'>NIGERIA</span> for better.

                </p>
                <Link to={`/subscribe`} className = 'btn hollow-dark tr'> join the movement &rarr;</Link>
            </div>
        </section>
    )
}
export default Section_1 