import './VideoList.scss'
import Video from '../Video/Video'

const VideoList = ({ video }) => {
    console.log("filteredVideoList:", video)   

    return (
        <>
            <section className='video-list'>
                <h3 className='video-list__heading demi'>Next Videos</h3>
                <ul className='video-list__list'>
                    {video.map((video) =>
                        <Video video={video} key={video.id} />
                    )}
                </ul>
            </section>
        </>
    )
}

export default VideoList