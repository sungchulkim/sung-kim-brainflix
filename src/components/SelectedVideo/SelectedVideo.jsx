import './SelectedVideo.scss'
import viewIconViews from './../../assets/icons/views.svg'
import viewIconLikes from './../../assets/icons/Likes.svg'

const SelectedVideo = ({ video }) => {
    return (
        <>
            <div className='selected-video' id='selected-video'>
                
                <div className='selected-video__container'>
                    <h1 className="selected-video__title">{video.title}</h1>
                    <hr className="hr-upper" />

                    <div className="selected-video__details-container">

                        <div className='selected-video__inner-details-left-container'>
                            <h3 className='selected-video__by bold'>By {video.channel}</h3>
                            <h4 className='selected-video__date normal'>{new Date(video.timestamp).toLocaleDateString()}</h4>
                        </div>
                        <div className='selected-video__inner-details-right-container'>
                            <div className="selected-video__inner-details-left-wrapper">
                                <img className='selected-video__icons' src={viewIconViews} alt="view icons" />
                                <h4 className='selected-video__view normal'>{video.views}</h4>
                            </div>
                            <div className="selected-video__inner-details-right-wrapper">
                                <img className='selected-video__icons' src={viewIconLikes} alt="view icons" />
                                <h4 className='selected-video__like normal'>{video.likes}</h4>
                            </div>
                        </div>

                    </div>
                    
                    <hr className="hr" />
                    <p className="selected-video__description line-height">{video.description}</p>
                </div>
            </div>
        </>
    )
}

export default SelectedVideo