import { useState } from 'react'
import './App.scss'
import videoData from './data/video-details.json'
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments'
import VideoList from './components/VideoList/VideoList'
import SelectedVideo from './components/SelectedVideo/SelectedVideo'

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])
  const filteredVideoList = videoData.filter(video => video.id !== selectedVideo.id)

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <SelectedVideo video={selectedVideo} />
          <Comments />
          <h1>CommentList </h1>
          <VideoList video={filteredVideoList} setSelectedVideo={setSelectedVideo} />
          
        </div>
      </main>
    </>
  )
}

export default App
