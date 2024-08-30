import './UploadVideo.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import thumbImg from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/icons/publish.svg'

const UploadVideo = () => {
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setIsUploading(true);
        setTimeout(() => {
            navigate('/');
        }, 1000); 
    };

    if (isUploading) {
        return <main className='loading'>Uploading your video...</main>;
    }

    return (
        <div className="upload-video__container">
            <form className='upload-video__form' action="" onSubmit={handleSubmit}>
                <h1 className='upload-video__heading'>Upload Video</h1>
                <hr className="upload-video__hr" />
                <div className="upload-video__thumbnail-input-container">
                    <div className="upload-video__thumbnail-container">
                        <h2 className='upload-video__thumbnail-title demi'>Video Thumbnail</h2>
                        <img className='upload-video__thumbnail-image' src={thumbImg} alt="video thumbnail of a sprinter on starting line" />
                    </div>
                    <div className="upload-video__input-container">
                        <label className="upload-video__title-label demi" htmlFor="upload-video__title-label">Title your  video</label>
                        <input className="upload-video__title-input" type="text" placeholder='Add a title to your video' />
                        <label className="upload-video__description-label demi" htmlFor="upload-video__description-label">Add a video description</label>
                        <textarea className='upload-video__description-input' name="upload-video__description-input" id="" placeholder='Add a description to your video'></textarea>
                    </div>
                </div>
                <hr className="upload-video__hr" />
                <div className="upload-video__button-container">
                    <div className="upload-video__button-wrapper">
                            <button className='upload-video__button-submit demi' type="submit"> <img className="upload-video__publish-icon" src={publishIcon} alt="publish icon" type="button" onClick={() => navigate('/')}/> Publish</button>
                    </div>
                    <button className="upload-video__button-cancel demi">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UploadVideo