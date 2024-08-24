import './HomePage.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import videoData from './data/video-details.json'
import Header from '../components/Header/Header.jsx'
// import Comments from './components/Comments/Comments'
import VideoList from '../components/VideoList/VideoList.jsx'
import SelectedVideo from '../components/SelectedVideo/SelectedVideo.jsx'
// import CommentList from './components/CommentList/CommentList'
import SelectedVideoScreen from '../components/SelectedVideoScreen/SelectedVideoScreen.jsx'
import { API_KEY, API_URL, endpointVideos } from './util.js'
import axios from 'axios'
// import SelectedVideo from '../components/SelectedVideo/SelectedVideo.jsx'

function HomePage() {
    // console.log(useParams())
    const { id } = useParams()
    const [videos, setVideos] = useState([])
    // const [selectedVideo, setSelectedVideo] = useState(videos[0])
    const [selectedVideo, setSelectedVideo] = useState()
    const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)

    const getVideos = async () => {
        const results = await axios.get(`${API_URL}${endpointVideos}${API_KEY}`)
        const videos = results.data
        console.log(videos)
        setVideos(videos)
        // setSelectedVideo(videos[0])
        let selectedVideo = videos.find(video => video.id === id)
        if (selectedVideo === undefined) {
            selectedVideo = videos[0]
        }
        setSelectedVideo(selectedVideo)
    }

    useEffect(() => {
        getVideos()
    }, [])




    if (selectedVideo === undefined) {
        return (
            <>
                <Header />
                <main className='loading' >Loading...✨</main>
            </>
        )
    }




    return (
        <>
            <Header />
            <main className="main">
                <SelectedVideoScreen video={selectedVideo} />
                <div className="main__container">
                    <div className="main__left-wrapper">
                        <SelectedVideo video={selectedVideo} />
                        {/* <Comments comments={selectedVideo.comments} /> */}
                        {/* <CommentList comments={selectedVideo.comments} /> */}
                    </div>
                    <div className="main__right-wrapper">
                        <VideoList video={filteredVideoList} setSelectedVideo={setSelectedVideo} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage
