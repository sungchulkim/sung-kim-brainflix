import './Comments.scss'
import commentImg from '../../assets/images/Mohan-muruge.jpg'

const Comments = () => {
    return (
        <>
            <div className="comment">
                <div className="comment__container">
                    <h3>3 Comments</h3>
                    <div className="comment__form-container">
                        <img className="comment__form-photo" src={commentImg} alt="Photo of a user" />
                        <form id="comment__form" action="">
                            <label htmlFor="comment__comment-input" className="comment__comment-label"></label>
                            <textarea className='comment__comment-input' name="comment__comment-input" id="comment__comment-input" placeholder='Add a new comment' required></textarea>
                            <button className='comment__button' type='submit' id='comment__button'>Comment</button>
                        </form>
                        <hr className='comment__hr' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments