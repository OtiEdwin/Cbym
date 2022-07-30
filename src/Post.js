
import './primitives.css'

function Post({ is_logged_in }) {


    return(
            <>
            {
                is_logged_in?(
                    <>
                        <h3 className='tc mc head-text'>Share a post</h3>
                        <div className='flex-center'>
                            <form className='form-width'>
                                <div className='input-holder relative'>
                                    <label className='primary-dark label absolute'>Post Title</label>
                                    <input/>
                                </div>
                                <div className='input-holder relative'>
                                    <label className='primary-dark text-label absolute'>Post Body</label>
                                    <textarea/>
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