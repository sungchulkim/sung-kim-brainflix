import './SelectedVideo.scss'
import viewIconViews from './../../assets/icons/views.svg'
import viewIconLikes from './../../assets/icons/Likes.svg'

const SelectedVideo = ({ video }) => {
    console.log({ video })

    return (
        <>
            <section className='selected-video' id='selected-video'>
                
                    <video className="selected-video__video-screen" poster={video.image} controls></video>
                    <div className='selected-video__container'>
                    <h2 className="selected-video__title">{video.title}</h2>
                    <hr className="hr" />
                    <div className="selected-video__details-container">
                        <div className='selected-video__inner-details-container'>
                            <h3 className='selected-video__by demi'>By {video.channel}</h3>
                            <h3 className='selected-video__date normal'>{new Date(video.timestamp).toLocaleDateString()}</h3>
                        </div>
                        <div className='selected-video__inner-details-container'>
                            <div className="selected-video__inner-details-wrapper">
                                <img className='selected-video__icons' src={viewIconViews} alt="view icons" />
                                <h3 className='selected-video__view normal'>{video.views}</h3>
                            </div>
                            <div className="selected-video__inner-details-wrapper">
                                <img className='selected-video__icons' src={viewIconLikes} alt="view icons" />
                                <h3 className='selected-video__like normal'>{video.likes}</h3>
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <p className="selected-video__description">{video.description}</p>

                </div>
            </section>

        </>
    )
}

export default SelectedVideo