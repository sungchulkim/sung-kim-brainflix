import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import { useState, useEffect } from 'react'
// import videoData from './data/video-details.json'
// import Header from './components/Header/Header'
// import Comments from './components/Comments/Comments'
// import VideoList from './components/VideoList/VideoList'
// import SelectedVideo from './components/SelectedVideo/SelectedVideo'
// import CommentList from './components/CommentList/CommentList'
// import SelectedVideoScreen from './components/SelectedVideoScreen/SelectedVideoScreen'
// import { API_KEY, API_URL, endpointVideo } from './pages/util.js'
// import axios from 'axios'

function App() {

  
  // const [videos, setVideos] = useState([])
  // const [selectedVideo, setSelectedVideo] = useState(videos[0])
  // const [selectedVideo, setSelectedVideo] = useState()
  // const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)

  // const getVideos = async () => {
  //   const results = await axios.get (`${API_URL}${endpointVideo}${API_KEY}`)
  //   const videos = results.data
  //   setVideos(videos)
  //   setSelectedVideo(videos[0])
  // }

  // useEffect( () => {
  //   getVideos ()
  // }, [])

  // if (selectedVideo === undefined) {
  //   return (
  //     <>
  //       <Header />
  //       <main>Loading...</main>
  //     </>
  //   )
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:age" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
