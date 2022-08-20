import Newslist from './NewsList'
import Post from './Post'

import './primitives.css'

function Feeds( {is_logged_in, dialogChange, loadingChange, news, setNews} ) {


    return(
        <>
            <h2 className='tc mc head-text-alt'><span className='dark h2'>&mdash;</span> Latest News</h2>
            <Newslist
             is_logged_in = { is_logged_in }
             dialogChange = { dialogChange }
             loadingChange = { loadingChange }
             news = {news}
             setNews = {setNews} />
            <Post
             is_logged_in = { is_logged_in } 
             dialogChange = { dialogChange } 
             loadingChange = { loadingChange } />
        </>
    )
}
export default Feeds