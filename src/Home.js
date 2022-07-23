import Newslist from './NewsList'
import './primitives.css'

function Home() {


    return(
        <>
        <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Latest News</h2>
        <Newslist/>
        </>
    )
}
export default Home