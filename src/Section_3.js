import { Link } from 'react-router-dom'
import './primitives.css'

const Section_3 = () =>{
    return(
        <section className="page col">
            <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Stay Updated</h2>
                   
            <div className="row relative  gray-background">
                <div className="ratio-5 relative board4">
                </div>

                <div className="ratio-5">
                    <div className="box tl col sec">
                        <div className="section-p col">
                            <h4 className='section-h4 primary-dark ml-0'>What do we offer ?</h4>
                            <div className="sub_section-p">
                                <p>Join our newsletter and stay updated with our day to day movements. <span className='secondary'>NO DULL AM!</span></p>
                            </div>
                        </div>
                        <Link to = '/subscribe' className="btn hollow-dark tr">Stay Updated &rarr;</Link>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
export default Section_3