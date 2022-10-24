import { useEffect } from 'react';
import {deletePost as deletePostHandler} from './handlers/privileged';

function Renderlist({ news_to_render, is_logged_in, dialogChange, loadingChange }){

    async function deletePost(index){
        console.log('deleting post...');

        loadingChange(true);
        deletePostHandler(index, {dialogChange});
        loadingChange(false);

    }
    return(
        <>
            {
                news_to_render.length===0?(
                    <>
                        <div className='ratio-6 mc tl col news'>
                            <h4 className='primary-dark'>No Posts</h4>
                            <p>Administrator is yet to post</p>

                        </div>
                    </>
                )
                :(
                    news_to_render.map(( newsItem, i ) =>{
                        let {jpeg, index, title, author, content, date} = newsItem;
                        date = new Date(date - 0).toLocaleString() ;
                        console.log(date)
                        return(
                            <div className='row news'>
                                <div className='ratio-3 art'>
                                    <img src={ jpeg }/>
                                </div>
                                <div className='ratio-6 mc tl col news' key={i} >
                                    {
                                        is_logged_in?(
                                            <div className='flex'>
                                                <button className = 'delete' onClick={ ()=>{deletePost(index) } }>Delete post</button>
                                            </div>
                                        )
                                        :<></>
                                    }

                                    <h4 className='primary-dark'>{title}</h4>
                                    <p>{content}</p>
                                    <div className='row space-btw details '>
                                        <div className='flex-center'>
                                            <h5 className='primary-dark mbc'>{author}</h5>
                                        </div>
                                        
                                        <h5 className='primary-dark mbc'>{date}</h5>
                                    </div> 
                                
                                </div>
                            </div>
                        )
                        
                    })                
                )

            }        
        </>
        
    )
    
}

export default Renderlist
