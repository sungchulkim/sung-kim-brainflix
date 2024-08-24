import './Video.scss'
import { Link } from 'react-router-dom'

const Video = ({ video }) => {
    const handleVideoClick = (video) => {
        setSelectedVideo(video)
        window.scrollTo(0, 0)
    }


    return (
        <>
            <li className="video">
                <div className="video__container">
                    <Link to={`/videos/${video.id}`} onClick="handleVideoClick">
                        <img
                            className='video__poster'
                            src={video.image}
                            alt={video.title}
                        />
                    </Link>
                    <div className="video__inner-container">
                        <Link to={`/videos/${video.id}`} onClick="handleVideoClick">
                            <h3 className="video__title demi">{video.title}</h3>
                        </Link>
                        <Link to={`/videos/${video.id}`} onClick="handleVideoClick">
                            <p className="video__channel">{video.channel}</p>
                        </Link>
                    </div>
                </div>
            </li >
        </>
    )
}

export default Video