import './primitives.css'
import './news.css'
import { useState } from 'react'
import Renderlist from './NewsToRender'

let news = [
    {
        caster : "Oloruntobiloba Adeboye",
        header : "This is the title of this post",
        date : Date(),
        content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
    },
    {
        caster : "Hillary Edwin",
        header : "This is the title of this other post",
        date : Date(),
        content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
    },
    {
        caster : "Mr Anderson",
        header : "This is the title of this post",
        date : Date(),
        content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
    },
    {
        caster : "November man",
        header : "This is the title of this other post",
        date : Date(),
        content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
    },
    {
        caster : "oluwagbade david",
        header : "This is the title of this post",
        date : Date(),
        content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
    },
    {
        caster : "Otonye Edwin",
        header : "This is the title of this other post",
        date : Date(),
        content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
    }
]

function Newslist({ is_logged_in }) {
    const [index, setIndex] = useState(3)
    let news_to_render = news.slice( 0, index )

    function showMore(){
        setIndex(index + 1)
    }

    return(
        <div className='col page'>
            <Renderlist news_to_render = {news_to_render} is_logged_in = { is_logged_in } />

            <div className='page row ratio-6 space-btw'>
                <a className='primary-dark underline' onClick={showMore}>Show more...</a>
            </div>
        </div>
    )
}
export default Newslist