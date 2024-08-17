import './VideoList.scss'
import Video from '../Video/Video'

const VideoList = ({ video, setSelectedVideo }) => {
    return (
        <>
            <section className='video-list'>
                <h3 className='video-list__heading demi'>Next Videos</h3>
                <ul className='video-list__list'>
                    {video.map((video) =>
                        <Video videoData={video} setSelectedVideo={setSelectedVideo} key={video.id} />
                    )}
                </ul>
            </section>
        </>
    )
}

export default VideoList