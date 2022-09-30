import { Link } from 'react-router-dom'
import './primitives.css'

function Section_1() {
    return(
        <section className='ratio-9 col'>
            <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span>Let's Make a Choice</h2>
            <div className='alt-5'>
                <p>Check Out our news updates either on our newsletters or here on the website.</p>
                <Link to={`/subscribe`} className = 'btn hollow-dark tr'> join the movement &rarr;</Link>
            </div>
        </section>
    )
}
export default Section_1 