import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App