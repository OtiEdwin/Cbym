import Newslist from './NewsList'
import Admin from './Post'

import './primitives.css'

function Home( {is_logged_in} ) {


    return(
        <>
        <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Latest News</h2>
        <Newslist/>
        <Admin is_logged_in = { is_logged_in }/>
        </>
    )
}
export default Home