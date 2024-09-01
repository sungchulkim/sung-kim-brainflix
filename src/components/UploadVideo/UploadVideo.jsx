import './UploadVideo.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import thumbImg from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/icons/publish.svg'
import axios from 'axios'

const UploadVideo = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            setError('Title and description are required.');
            return;
        }

        setIsUploading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/videos', {
                title,
                description
            });

            console.log('Video uploaded:', response.data);
            setIsUploading(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error uploading video:', error);
            setError('Failed to upload video. Please try again.');
            setIsUploading(false);
        }
    };


    if (isUploading) {
        return <main className='loading'>Uploading your video...</main>;
    }


    if (isSubmitted) {
        return (
            <div className="upload-success">
                <p className='upload-video__success demi'>Video uploaded successfully!</p>
                <NavLink to="/" >
                <p className="upload-video__success-link-home demi">Return to Home</p>

                </NavLink>
            </div>
        );
    }



    return (
        <div className="upload-video__container">
            <form className='upload-video__form' action="" onSubmit={handleSubmit}>
                <h1 className='upload-video__heading'>Upload Video</h1>
                <hr className="upload-video__hr" />


                {/* // error */}
                {error && <p className="upload-video__error">{error}</p>}


                <div className="upload-video__thumbnail-input-container">
                    <div className="upload-video__thumbnail-container">
                        <h2 className='upload-video__thumbnail-title demi'>Video Thumbnail</h2>
                        <img className='upload-video__thumbnail-image' src={thumbImg} alt="video thumbnail of a sprinter on starting line" />
                    </div>
                    <div className="upload-video__input-container">
                        <label className="upload-video__title-label demi" htmlFor="upload-video__title-label">Title your  video</label>
                        <input
                            className="upload-video__title-input"
                            type="text"
                            placeholder='Add a title to your video'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label className="upload-video__description-label demi" htmlFor="upload-video__description-label">Add a video description</label>
                        <textarea
                            className='upload-video__description-input'
                            name="upload-video__description-input"
                            id="upload-video__description-input"
                            placeholder='Add a description to your video'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <hr className="upload-video__hr" />
                <div className="upload-video__button-container">
                    <div className="upload-video__button-wrapper">
                        <button className='upload-video__button-submit demi' type="submit">
                            <img className="upload-video__publish-icon" src={publishIcon} alt="publish icon" /> Publish
                        </button>
                    </div>
                    <NavLink to="/">
                        <button className="upload-video__button-cancel demi">Cancel</button>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default UploadVideo