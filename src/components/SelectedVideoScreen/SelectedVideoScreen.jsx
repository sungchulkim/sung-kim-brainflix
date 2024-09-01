import { useState, useEffect } from 'react'
import './SelectedVideoScreen.scss'
import { API_URL, STATIC_PATH } from '../../pages/Util/util'

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
        <video
            className="selected-video__video-screen"
            poster={posterSrc}
            controls
        />
    )
}

export default SelectedVideoScreen