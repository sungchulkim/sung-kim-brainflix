import { useState, useEffect } from 'react';
import './SelectedVideoScreen.scss';
import { API_URL, STATIC_PATH } from '../../pages/Util/util';

const SelectedVideoScreen = ({ video }) => {
    const [posterSrc, setPosterSrc] = useState('');

    useEffect(() => {
        const checkImage = async (url) => {
            try {
                const response = await fetch(url, { method: 'HEAD' });
                return response.ok;
            } catch (error) {
                console.error('Error checking image:', error);
                return false;
            }
        };

        const setAppropriateImage = async () => {
            const originalUrl = `${API_URL}${STATIC_PATH}${video.image}`;
            const imageExists = await checkImage(originalUrl);

            setPosterSrc(imageExists
                ? originalUrl
                : `${API_URL}${STATIC_PATH}thumbnail-default.jpg`
            );
        };

        setAppropriateImage();
    }, [video.image]);

    return (
        <video
            className="selected-video__video-screen"
            poster={posterSrc}
            controls
        />
    );
};

export default SelectedVideoScreen;