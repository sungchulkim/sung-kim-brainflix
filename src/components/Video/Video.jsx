import { useState } from 'react'
import './Video.scss'
import { Link } from 'react-router-dom'
import { API_URL, STATIC_PATH } from '../../pages/Util/util'

const Video = ({ video, setSelectedVideo }) => {
    const [imageError, setImageError] = useState(false)

    const handleVideoClick = () => {
        setSelectedVideo(video)
        window.scrollTo(0, 0)
    };

    const handleImageError = () => {
        setImageError(true)
    };

    const imageSrc = imageError
        ? `${API_URL}${STATIC_PATH}thumbnail-default.jpg`
        : `${API_URL}${STATIC_PATH}${video.image}`

    return (
        <li className="video">
            <div className="video__container">
                <Link to={`/videos/${video.id}`} onClick={handleVideoClick}>
                    <img
                        className='video__poster'
                        src={imageSrc}
                        alt={video.title}
                        onError={handleImageError}
                    />
                </Link>
                <div className="video__inner-container">
                    <Link to={`/videos/${video.id}`} onClick={handleVideoClick}>
                        <h3 className="video__title demi">{video.title}</h3>
                    </Link>
                    <Link to={`/videos/${video.id}`} onClick={handleVideoClick}>
                        <p className="video__channel">{video.channel}</p>
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default Video;