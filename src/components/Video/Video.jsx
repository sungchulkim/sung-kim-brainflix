import './Video.scss'





const Video = ({ videoData, setSelectedVideo }) => {
    const handleVideoClick = (video) => {
        setSelectedVideo(video)
        window.scrollTo(0, 0)
    }

    return (
        <>

            <li className="video" onClick={() => handleVideoClick(videoData)}>
                <div className="video__container">
                    <img
                        className='video__poster'
                        src={videoData.image}
                        alt={videoData.title}
                    />
                    <div className="video__inner-container">
                        <h3 className="video__title demi">{videoData.title}</h3>
                        <p className="video__channel">{videoData.channel}</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Video