import { useState, useEffect } from 'react'
import './App.scss'
// import videoData from './data/video-details.json'
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments'
import VideoList from './components/VideoList/VideoList'
import SelectedVideo from './components/SelectedVideo/SelectedVideo'
import CommentList from './components/CommentList/CommentList'
import SelectedVideoScreen from './components/SelectedVideoScreen/SelectedVideoScreen'
import { API_KEY, API_URL, endpointVideo } from './pages/util.js'
import axios from 'axios'

function App() {
  const [videos, setVideos] = useState([])
  // const [selectedVideo, setSelectedVideo] = useState(videos[0])
  const [selectedVideo, setSelectedVideo] = useState()
  const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)

  const getVideos = async () => {
    const results = await axios.get (`${API_URL}${endpointVideo}${API_KEY}`)
    const videos = results.data
    setVideos(videos)
    setSelectedVideo(videos[0])
  }

  useEffect( () => {
    getVideos ()
  }, [])




  if (selectedVideo === undefined) {
    return (
      <>
        <Header />
        <main>Loading...</main>
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

export default App
