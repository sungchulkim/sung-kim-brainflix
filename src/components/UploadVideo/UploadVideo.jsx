import './UploadVideo.scss'
import thumbImg from '../../assets/images/Upload-video-preview.jpg'

const UploadVideo = () => {
    return (
        <>
            <h1>Upload Video</h1>
            <h2>Video Thumbnail</h2>
            <img src={thumbImg} alt="video thumbnail of a sprinter on starting line" />
            <form action="">
                <label htmlFor="upload-video__title-label" className="upload-video__title-label">Title your  video</label>
                <input type="text" className="upload-video__title-input" placeholder='Add a title to your video'/>
                <label htmlFor="upload-video__description-label" className="upload-video__description-label"></label>
                <textarea className='upload-video__description-input' name="upload-video__description-input" id=""></textarea>
                <button className='upload-video__button-submit' type="submit">Publish</button>
                <button className="upload-video__button-cancel">Cancel</button>
            </form>
        </>
    )
}