import { useState, useEffect } from 'react'
import './SelectedVideoScreen.scss'
import { API_URL, STATIC_PATH, DEFAULT_VIDEO } from '../../pages/Util/util'

const SelectedVideoScreen = ({ video }) => {
    const [posterSrc, setPosterSrc] = useState('')
    

    useEffect(() => {
        const originalUrl = `${API_URL}${STATIC_PATH}${video.image}`
        const defaultUrl = `${API_URL}${STATIC_PATH}thumbnail-default.jpg`

        const img = new Image()
        img.onload = () => setPosterSrc(originalUrl)
        img.onerror = () => setPosterSrc(defaultUrl)
        img.src = originalUrl
    }, [video.image])



    return (
        <div className="video-container">

            <video
                className="selected-video__video-screen"
                id="selected-video__video-screen"
                poster={posterSrc}
                controls
            >
                <source src={DEFAULT_VIDEO} type="video/mp4" />
            </video>

        </div>
    )
}

export default SelectedVideoScreen