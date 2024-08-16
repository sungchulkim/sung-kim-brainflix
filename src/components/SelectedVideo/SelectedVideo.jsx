import './SelectedVideo.scss'

const SelectedVideo = ({ video }) => {
    console.log({ video })

    return (
        <>
            <section className='selected-video' id='selected-video'>
                <div className='selected-video__container'>
                    <video className="selected-video__video-screen" poster={video.image} controls></video>
                    <h2 className="selected-video__title">{video.title}</h2>
                    <div className="selected-video__details-container">
                        <div className='selected-video__by-date-container'>
                            <h3 className='selected-video__by'>Title</h3>
                            <p className='selected-video__date'></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SelectedVideo