import './VideoDetailsPage.scss'
import { useState } from 'react'
import Header from '../Header/Header.jsx'
import VideoList from '../VideoList/VideoList.jsx'
import SelectedVideoScreen from '../SelectedVideoScreen/SelectedVideoScreen.jsx'
import SelectedVideo from '../SelectedVideo/SelectedVideo.jsx'
import Comments from '../Comments/Comments.jsx'
import CommentList from '../CommentList/CommentList.jsx'


function VideoDetailsPage({ selectedVideo, videos, id }) {
    const [comments, setComments] = useState(selectedVideo.comments);

    if (!selectedVideo) {
        return (
            <>
                <Header />
                <main className='loading'>Loading...</main>
            </>
        )
    }

    const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)

    const handleCommentDeleted = (deletedCommentId) => {
        setComments(prevComments => prevComments.filter(comment => comment.id !== deletedCommentId));
    };

    return (
        <>
            <Header />
            <main className="main">
                <SelectedVideoScreen video={selectedVideo} />
                <div className="main__container">
                    <div className="main__left-wrapper">
                        <SelectedVideo video={selectedVideo} />
                        <Comments comments={selectedVideo.comments} />
                        <CommentList comments={selectedVideo.comments} videoId={id} onCommentDeleted={handleCommentDeleted} />
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