import './VideoDetailsPage.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import VideoList from '../components/VideoList/VideoList.jsx'
import SelectedVideoScreen from '../components/SelectedVideoScreen/SelectedVideoScreen.jsx'
import SelectedVideo from '../components/SelectedVideo/SelectedVideo.jsx'
import Comments from '../components/Comments/Comments.jsx'
import CommentList from '../components/CommentList/CommentList.jsx'
import { API_KEY, API_URL } from './util.js'
import axios from 'axios'

function VideoDetailsPage() {
    const { id } = useParams()
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const getVideos = async () => {
        try {
            const response = await axios.get(`${API_URL}/videos${API_KEY}`)
            setVideos(response.data)

            if (!id && response.data.length > 0) {
                getVideoDetails(response.data[0].id)
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getVideos()
    }, [])


    const getVideoDetails = async (videoId) => {
        try {
            const response = await axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
            setSelectedVideo(response.data)
            console.log("videoId :", videoId)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (id) {
            getVideoDetails(id)
        }
    }, [id])



    if (!selectedVideo) {
        return (
            <>
                <Header />
                <main className='loading'>Loading...</main>
            </>
        )
    }



    const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)

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