import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Comments.scss';
import commentImg from '../../assets/images/Mohan-muruge.jpg';
import addIcon from '../../assets/icons/add_comment.svg';
import { API_URL } from '../../pages/Util/util'
import axios from 'axios';

const Comments = ({ comments }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newComment, setNewComment] = useState('');
    const [localComments, setLocalComments] = useState(comments || []);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        if (!newComment.trim()) {
            setError('Comment cannot be empty.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await axios.post(`${API_URL}/videos/${id}/comments`, {
                comment: newComment,
            });

            setLocalComments([...localComments, response.data]);
            setNewComment('');
            setIsSubmitting(false);

            // navigate(`/videos/${id}`)
            window.location.reload();
            // navigate(0)

        } catch (error) {
            console.error('Error posting comment:', error);
            setError('Failed to post comment. Please try again.');
            setIsSubmitting(false);
        }
    };


    return (
        <div className="comment__container">
            <img className="comment__form-photo" src={commentImg} alt="User" />

            <div className="comment__form-wrapper">
                <form id="comment__form" className="comment__form" onSubmit={handleSubmitComment}>
                    <div className="comment__inner-wrapper">
                        <h3 className="comment__heading normal">Join the conversation</h3>
                        <label htmlFor="comment__comment-input" className="comment__comment-label"></label>
                        <textarea
                            className="comment__comment-input"
                            name="comment__comment-input"
                            id="comment__comment-input"
                            placeholder="Add a new comment"
                            value={newComment}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <div className="comment__button-wrapper">
                        <button className="comment__button bold" type="submit" id="comment__button">
                            <img className="comment__add-icon" src={addIcon} alt="Add icon" /> Comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comments;