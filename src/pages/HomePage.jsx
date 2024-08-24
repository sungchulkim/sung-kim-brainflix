import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VideoDetailsPage from './VideoDetailsPage'
import { API_KEY, API_URL } from './util.js'
import axios from 'axios'

function HomePage() {
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
    }, [id])


    const getVideoDetails = async (videoId) => {
        try {
            const response = await axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
            setSelectedVideo(response.data)
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
        return <div>Loading...</div>
    }

    return (
        <VideoDetailsPage selectedVideo={selectedVideo} videos={videos} />
    )
}

export default HomePage