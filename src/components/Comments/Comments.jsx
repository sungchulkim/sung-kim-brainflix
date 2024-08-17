import './Comments.scss'
import commentImg from '../../assets/images/Mohan-muruge.jpg'
import addIcon from '../../assets/icons/add_comment.svg'

const Comments = ({ comments }) => {
    return (
        <>
            <div className="comment">
                <h3 className='comment__counts demi'>{comments.length} Comments</h3>

                <div className="comment__container">

                    <div className="comment__form-container">
                        <img className="comment__form-photo" src={commentImg} alt="Photo of a user" />

                        <div className="comment__form-wrapper">
                            <form id="comment__form" action="">
                                <h3 className="comment__heading normal">Join the conversation</h3>
                                <label htmlFor="comment__comment-input" className="comment__comment-label"></label>
                                <textarea className='comment__comment-input' name="comment__comment-input" id="comment__comment-input" placeholder='Add a new comment' required></textarea>
                                <button className='comment__button bold' type='submit' id='comment__button'> <img src={addIcon} alt="add icon" /> Comment</button>
                            </form>
                        </div>

                    </div>
                    
                </div>
                <hr className='comment__hr' />

            </div>
        </>
    )
}

export default Comments