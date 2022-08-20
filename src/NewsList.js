import './primitives.css'
import './news.css'
import { useEffect, useState } from 'react'
import Renderlist from './NewsToRender'
import {getFeeds as getFeedsHandler} from './handlers/core'

// let news = [
//     // {
//     //     author : "Oloruntobiloba Adeboye",
//     //     title : "This is the title of this post",
//     //     date : Date(),
//     //     content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
//     // },
//     // {
//     //     author : "Hillary Edwin",
//     //     title : "This is the title of this other post",
//     //     date : Date(),
//     //     content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
//     // },
//     // {
//     //     author : "Mr Anderson",
//     //     title : "This is the title of this post",
//     //     date : Date(),
//     //     content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
//     // },
//     // {
//     //     author : "November man",
//     //     title : "This is the title of this other post",
//     //     date : Date(),
//     //     content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
//     // },
//     // {
//     //     author : "oluwagbade david",
//     //     title : "This is the title of this post",
//     //     date : Date(),
//     //     content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
//     // },
//     // {
//     //     author : "Otonye Edwin",
//     //     title : "This is the title of this other post",
//     //     date : Date(),
//     //     content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
//     // }
// ]


function Newslist({ is_logged_in, dialogChange, loadingChange, news, setNews }) {
    // const [index, setIndex] = useState(news.length);
    // let news_to_render = news.slice( 0, index )

    useEffect( ()=>{
        //
        getFeeds(0, 3, {dialogChange, setNews} );
    } );


    async function getFeeds(start_index, number){
        console.log("Fetching feeds...");
    
        loadingChange(true);
        await getFeedsHandler(start_index, number,  {dialogChange, setNews});
        loadingChange(false);
    
    }

    function showMore(){
        //resolve index first
        let index = news[news.length - 1].index
        getFeeds(index, 3, {dialogChange, setNews});
    }

    return(
        <div className='col page'>
            <Renderlist 
                news_to_render = {news}
                is_logged_in = { is_logged_in } 
                dialogChange = { dialogChange } 
                loadingChange = { loadingChange } />

            <div className='page row ratio-6 space-btw'>
                <a className='primary-dark underline' onClick={showMore}>Show more...</a>
            </div>
        </div>
    )
}
export default Newslist