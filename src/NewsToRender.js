
function Renderlist({ news_to_render, is_logged_in }){
    return(
        <>
            {
                news_to_render.map(( newsItem, index ) =>{
                    return(
                        <div className='ratio-6 mc tl col news' key={index}>
                            {
                                is_logged_in?(
                                    <div className='flex'>
                                        <button className = 'delete'>Delete post</button>
                                    </div>
                                )
                                :<></>
                            }

                            <h4 className='primary-dark'>{newsItem.header}</h4>
                            <p>{newsItem.content}</p>
                            <div className='row space-btw details '>
                                <div className='flex-center'>
                                    <h5 className='primary-dark mbc'>{newsItem.caster}</h5>
                                </div>
                                
                                <h5 className='primary-dark mbc'>2 hours ago</h5>
                            </div> 
                                                        
                        </div>
                    )
                    
                })
            }        
        </>
        
    )
    
}

export default Renderlist
