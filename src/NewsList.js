import './primitives.css'
import './news.css'

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
    }
]

function Newslist({ is_logged_in }) {

    return(
        <div className='col page'>

            <div className='ratio-6 mc tl col news'>
                {
                    is_logged_in?(
                        <div className='flex'>
                            <button className = 'delete'>Delete post</button>
                        </div>
                    )
                    :<></>
                }
                
                <h4 className='primary-dark'>{news[0].header}</h4>
                <p>{news[0].content}</p>
                <div className='row space-btw details'>
                    <div className='flex-center'>
                        <img src='eboye.png' style={{height: '3rem', width: '3rem', borderRadius:'50%', margin: '0 1rem 0 0'}}/>
                        <h5 className='primary-dark mbc'>{news[0].caster}</h5>
                    </div>
                    <h5 className='primary-dark mbc'>5 minutes ago</h5>
                </div>
            </div>

            <div className='ratio-6 mc tl col news'>
                {
                    is_logged_in?(
                        <div className='flex'>
                            <button className = 'delete'>Delete post</button>
                        </div>
                    )
                    :<></>
                }

                <h4 className='primary-dark'>{news[1].header}</h4>
                <p>{news[1].content}</p>
                <div className='row space-btw details '>
                    <div className='flex-center'>
                        <img src='eboye.png' style={{height: '3rem', width: '3rem', borderRadius:'50%', margin: '0 1rem 0 0'}}/>
                        <h5 className='primary-dark mbc'>{news[1].caster}</h5>
                    </div>
                    
                    <h5 className='primary-dark mbc'>2 hours ago</h5>
                </div>
            </div>
            <div className='page row ratio-6 space-btw'>
                <a className='primary-dark underline'>Show more...</a>
                <a className='primary-dark underline'>Show less...</a>
            </div>
        </div>
    )
}
export default Newslist