import { Link } from "react-router-dom"

const Section_2 = () =>{
    return(
        <section className="page col">
            <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> A Safe Space</h2>
                   
            <div className="row relative  gray-background">
                <div className="ratio-5">
                    <div className="box tl col pri">
                        <div className="section-p col">
                            <h4 className='section-h4 primary-dark ml-0'>Our Mission</h4>
                            <div className="sub_section-p">
                                <p>CBYM offers a safe space for like minded youths to digest useful information pertaining to the movement of the association and it's goals.</p>
                            </div>
                        </div>
                        <Link to='/subscribe' className="btn hollow-dark tr">Yeah, i'm in &rarr;</Link>
                    </div>
                </div>

                <div className="ratio-5 relative board3">
                </div>                
            </div>
        </section>
    )
}
export default Section_2