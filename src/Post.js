import './primitives.css'
import {post as postHandler} from './handlers/privileged';

function Post({ is_logged_in, dialogChange, loadingChange }) {
    async function share(e){
        e.preventDefault();
        console.log('sharing post');

        let title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            content = document.getElementById('content').value;
        
        loadingChange(true);
        await postHandler(title, author, content, {dialogChange});
        loadingChange(false);

    }

    

    return(
            <>
            {
                is_logged_in?(
                    <>
                        <h3 className='tc mc head-text'>Share a post</h3>
                        <div className='flex-center'>
                            <form className='form-width' onSubmit={share} >
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
                                    <button className='btns filled'>Share &rarr;</button>
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