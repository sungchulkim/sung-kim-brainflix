import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VideoDetailsPage from '../../components/VideoDetailsPage/VideoDetailsPage.jsx'
// import { API_KEY, API_URL } from '../Util/util.js'
import { API_URL } from '../Util/util.js'
import axios from 'axios'

function HomePage() {
    const { id } = useParams()
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    
    // console.log("videos: ", videos)    
    // console.log("id: ", id)

    const getVideos = async () => {
        try {
            // const response = await axios.get(`${API_URL}/videos${API_KEY}`)
            const response = await axios.get(`${API_URL}/videos`)
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
            // const response = await axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
            const response = await axios.get(`${API_URL}/videos/${videoId}`)
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
        return (
            <>
                <main className='loading'>Loading...</main>
            </>
        )
    }


    return (
        <VideoDetailsPage selectedVideo={selectedVideo} videos={videos} id={id} />
    )
}

export default HomePage