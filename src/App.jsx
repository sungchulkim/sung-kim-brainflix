import { useState } from 'react'
import './App.scss'
import videoData from './data/video-details.json'
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments'
import VideoList from './components/VideoList/VideoList'
import SelectedVideo from './components/SelectedVideo/SelectedVideo'
import CommentList from './components/CommentList/CommentList'

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])
  const filteredVideoList = videoData.filter(video => video.id !== selectedVideo.id)
  
  // console.log(selectedVideo.title)
  // console.log(videoData[8])
  // console.log(filteredVideoList[2])
  // console.log(selectedVideo.comments[1].name)
  

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <SelectedVideo video={selectedVideo} />
          <Comments comments={selectedVideo.comments} />
          <CommentList comments={selectedVideo.comments} />
          <VideoList video={filteredVideoList} setSelectedVideo={setSelectedVideo} />
          
        </div>
      </main>
    </>
  )
}

export default App
