import './VideoDetailsPage.scss'
import Header from '../Header/Header.jsx'
import VideoList from '../VideoList/VideoList.jsx'
import SelectedVideoScreen from '../SelectedVideoScreen/SelectedVideoScreen.jsx'
import SelectedVideo from '../SelectedVideo/SelectedVideo.jsx'
import Comments from '../Comments/Comments.jsx'
import CommentList from '../CommentList/CommentList.jsx'


function VideoDetailsPage({selectedVideo, videos, id}) {
    console.log(selectedVideo, videos, id)

    if (!selectedVideo) {
        return (
            <>
                <Header />
                <main className='loading'>Loading...</main>
            </>
        )
    }

    const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)
    console.log("selectedVideo: ", selectedVideo)

    return (
        <>
            <Header />
            <main className="main">
                <SelectedVideoScreen video={selectedVideo} />
                <div className="main__container">
                    <div className="main__left-wrapper">
                        <SelectedVideo video={selectedVideo} />
                        <Comments comments={selectedVideo.comments} />
                        <CommentList comments={selectedVideo.comments} />
                    </div>
                    <div className="main__right-wrapper">
                        <VideoList video={filteredVideoList} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default VideoDetailsPage