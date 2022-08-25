import './primitives.css'
import './news.css'
import { useEffect, useState } from 'react'
import Renderlist from './NewsToRender'
import {getFeeds as getFeedsHandler} from './handlers/core'


function Newslist({ is_logged_in, dialogChange, loadingChange, news, setNews }) {

    useEffect( ()=>{
        //
        showMore();
    }, [] );

    function addNews(new_news){
        // 
        let updated_news = news.concat(new_news);
        setNews(updated_news);
    }

    async function getFeeds(start_index, number){
        console.log("Fetching feeds...");
    
        loadingChange(true);
        await getFeedsHandler(start_index, number,  {dialogChange, addNews });
        loadingChange(false);
    
    }


    function showMore(){
        //resolve index first
        let index = news.length ? news[news.length - 1].index : 0 ;
        
        getFeeds(index, 3);
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