
import './primitives.css'

function Post({ is_logged_in }) {
    function share(){
        console.log('sharing post')
    }

    return(
            <>
            {
                is_logged_in?(
                    <>
                        <h3 className='tc mc head-text'>Share a post</h3>
                        <div className='flex-center'>
                            <form method='' className='form-width'>
                                <div className='input-holder relative'>
                                    <label htmlFor = 'title' className='primary-dark label absolute'>Post Title</label>
                                    <input id = 'title' name = 'title' required/>
                                </div>
                                <div className='input-holder relative'>
                                    <label htmlFor = 'author' className='primary-dark label absolute'>Author</label>
                                    <input id = 'author' name = 'author' required/>
                                </div>
                                <div className='input-holder relative'>
                                    <label htmlFor='content' className='primary-dark text-label absolute'>Post Body</label>
                                    <textarea id='content' name = 'content' required/>
                                </div>
                                <div className='input-holder relative'>
                                    <button className='btns filled' onClick={ share() }>Share &rarr;</button>
                                </div>
                            </form>
                        </div>                    
                    </>
                )
                :<></>               
            }
            </>            

    )
}
export default Post