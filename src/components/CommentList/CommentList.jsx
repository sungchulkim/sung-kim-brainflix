import './CommentList.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import commentImg from '../../assets/images/grayPhoto.png'
import axios from 'axios'
import { API_URL } from '../../pages/Util/util'

const CommentList = ({ comments, videoId }) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const [deletingCommentId, setDeletingCommentId] = useState(null)
    const { commentId } = useParams()
    console.log(videoId)
    comments.forEach(comment => console.log("comment.id: ", comment.id))
    console.log(commentId)
    // console.log(comment.id)


    const handleDeleteComment = async (commentId) => {
        if (isDeleting) return;

        setIsDeleting(true);
        setDeletingCommentId(commentId);

        try {
            const response = await axios.delete(`${API_URL}/videos/${videoId}/comments/${commentId}`);
            console.log(commentId)
            if (response.status === 200) {
                console.log("Comment deleted successfully");
                window.location.reload();
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
            if (error.response && error.response.status === 404) {
                alert('Comment or video not found. It may have been already deleted.');
            } else {
                alert('Failed to delete comment. Please try again.');
            }
        } finally {
            setIsDeleting(false);
            setDeletingCommentId(null);
        }
    };


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


                                <button
                                    className='comment-list__delete-button demi'
                                    onClick={() => handleDeleteComment(comment.id)}

                                >
                                    Delete
                                </button>


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