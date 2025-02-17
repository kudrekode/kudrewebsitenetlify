import React from 'react';
import RainAnimation from '../background/RainAnimation';
import BackButton from '../components/BackButton';


import './Music.css';

const Music: React.FC = () => {
    return (
        <div className="shows-page">
            <RainAnimation />
            <BackButton />

            <div className="content-shows">
                <h1>MUSIC</h1>
                <div className="music-container">
                    <p>Choose a platform to stream our music</p>
                    <br></br>
                    <div className="icon-container">

                        <a href="https://open.spotify.com/artist/1FLkFVhsrX84eLBtCWfvXI" target="_blank"
                           rel="noopener noreferrer"
                           className="icon">
                            <i className="fab fa-spotify"></i>
                        </a>

                        <a href="https://music.apple.com/gb/artist/kudre/1624311213" target="_blank"
                           rel="noopener noreferrer"
                           className="icon">
                            <i className="fab fa-apple"></i>
                        </a>

                        <a href="https://www.deezer.com/en/artist/6725797" target="_blank" rel="noopener noreferrer"
                           className="icon">
                            <i className="fab fa-deezer"></i>
                        </a>

                        <a href="https://www.youtube.com/channel/UCQ8w_3e8ZkC5kE6c7mFLUgQ" target="_blank"
                           rel="noopener noreferrer"
                           className="icon">
                            <i className="fab fa-youtube"></i>
                        </a>

                        <a href="https://www.amazon.co.uk/music/player/artists/B00NSNVSZ2/kudre" target="_blank"
                           rel="noopener noreferrer"
                           className="icon">
                            <i className="fab fa-amazon"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;