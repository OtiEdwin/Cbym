import { Link } from 'react-router-dom'
import './primitives.css'

const Section_4 = () =>{
    return(
        <section className="page col">
            <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Naija Youths Arise</h2>
                   
            <div className="row relative  gray-background">
                <div className="ratio-5">
                    <div className="box tl col slide-left tert">
                        <div className="section-p col">
                            <h4 className='section-h4 primary-dark ml-0'>Let's make the right Choice</h4>
                            <div className="sub_section-p">
                                <p>Despite all we have been through in these trying times, Now is the time for us to unite and make the right choice.</p>
                            </div>
                        </div>
                        <Link to = '/subscribe' className="btn hollow-dark tr">Yeah, i'm in &rarr;</Link>
                    </div>
                </div>

                <div className="ratio-5 relative board5">
                </div>                
            </div>
        </section>
    )
}
export default Section_4