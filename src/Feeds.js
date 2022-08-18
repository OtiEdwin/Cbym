import Newslist from './NewsList'
import Admin from './Post'

import './primitives.css'

function Feeds( {is_logged_in} ) {


    return(
        <>
        <h2 className='tc mc head-text-alt'><span className='dark h2'>&mdash;</span> Latest News</h2>
        <Newslist is_logged_in = { is_logged_in } />
        <Admin is_logged_in = { is_logged_in }/>
        </>
    )
}
export default Feeds