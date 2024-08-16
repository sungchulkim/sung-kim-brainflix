import './VideoList.scss'
import Video from '../Video/Video'

const VideoList = ({ video, setSelectedVideo }) => {
    return (
        <>
            <section className='video-list'>
                <h2 className='video-list__heading'>Next Videos</h2>
                <ul className='video-list__list'>
                    {video.map((video) => <Video videoData={video} setSelectedVideo={setSelectedVideo} key={video.id} />)}
                </ul>
            </section>
        </>
    )
}

export default VideoList