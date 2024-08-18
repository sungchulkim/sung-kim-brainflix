import './CommentList.scss'
import commentImg from '../../assets/images/grayPhoto.png'

const CommentList = ({ comments }) => {

    return (
        <>
            <div className="comment-list__outer-container">
                {comments.map((comment) => (

                    <div key={comment.id} className="comment-list__container">
                        <div className="comment-list__comment-container">
                            <img className="comment-list__gray-circle" src={commentImg} alt="Photo of a user" />

                            <div className="comment-list__outer-wrapper">
                                <div className="comment-list__inner-wrapper">
                                    <h3 className='comment-list__name demi'>{comment.name}</h3>
                                    <h3 className='comment-list__timestamp normal'>{new Date(comment.timestamp).toLocaleDateString()}</h3>
                                </div>
                                <p className='comment-list__comment'>{comment.comment}</p>
                            </div>

                        </div>
                        <hr className="comments__hr" />
                    </div>

                ))}
            </div>
        </>
    )
}

export default CommentList