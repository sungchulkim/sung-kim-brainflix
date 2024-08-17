import './SelectedVideoScreen.scss'

const SelectedVideoScreen = ({ video }) => {
    return (
        <>
        <video className="selected-video__video-screen" poster={video.image} controls></video>
        </>
    )
}

export default SelectedVideoScreen