import './primitives.css'
import './news.css'

let news = [
    {
    caster : "Oloruntobiloba Adeboye",
    content : "This is the content of the news which i just posted, It is better than lorem ipsum. The details of tis news entails that the sophisticatedness of this news is at a very high level very remarkable in every regard and that is "
    },
    {
        caster : "Hillary Edwin",
        content : "this is the contet of the news of mr edwin, another piece of usefu information cast by mr edwin himself, it is still better that lorem ipsum for sure. lorem ipsum sucks in everyway it is very important to me that i use rral texts because the fact that i can read english gives me a practical view of my website. emphasis on practical"
    }
]

function Newslist() {


    return(
        <div className='col page'>
            <div className='ratio-6 mc tl col news'>
                <h4 className='primary-dark'>{news[0].caster} &ndash; <span className = 'news-h4'>admin</span></h4>
                <p>{news[0].content}</p>
            </div>

            <div className='ratio-6 mc tl col news'>
                <h4 className='primary-dark'>{news[1].caster} &ndash; <span className = 'news-h4'>admin</span></h4>
                <p>{news[1].content}</p>
            </div>
        </div>
    )
}
export default Newslist