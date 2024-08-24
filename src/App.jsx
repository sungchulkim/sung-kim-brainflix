import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VideoDetailsPage from './pages/VideoDetailsPage'
import VideoUploadPage from './pages/VideoUploadPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:id" element={<VideoDetailsPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App