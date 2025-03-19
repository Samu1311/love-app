import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FastAverageColor } from "fast-average-color";
import "../styles/PlayingSong.css";

const PlayingSong = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { song, scrollPosition } = location.state || {}; // Destructure scrollPosition from state
  const audioRef = useRef(null);
  const imgRef = useRef(null);
  const [isPlayingState, setIsPlayingState] = useState(true); // Default to `true` to start playing automatically
  const [volume, setVolume] = useState(1);
  const [backgroundGradient, setBackgroundGradient] = useState("#000");

  useEffect(() => {
    if (audioRef.current) {
      if (isPlayingState) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlayingState]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (imgRef.current) {
      const fac = new FastAverageColor();
      imgRef.current.onload = () => {
        const color = fac.getColor(imgRef.current);
        const gradient = `linear-gradient(135deg, ${color.hex}, ${color.hex}80)`;
        setBackgroundGradient(gradient);
      };
    }
  }, [song]);

  const togglePlayPause = () => {
    setIsPlayingState(!isPlayingState);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return "fas fa-volume-mute";
    } else if (volume < 0.5) {
      return "fas fa-volume-down";
    } else {
      return "fas fa-volume-up";
    }
  };

  const goBack = () => {
    // Pass the scroll position back to MusicBox
    navigate("/music-box", { state: { scrollPosition } });
  };

  if (!song) {
    return <div>No song selected</div>;
  }

  return (
    <div className="playing-song-container" style={{ background: backgroundGradient }}>
      <div className="vinyl-record">
        <div className="record-center">
          <img
            ref={imgRef}
            src={`${process.env.PUBLIC_URL}${song.cover}`}
            alt={song.title}
            crossOrigin="anonymous"
          />
        </div>
      </div>
      <div className="player">
        <audio ref={audioRef} src={`${process.env.PUBLIC_URL}${song.src}`} />
        <div className="controls">
          <button onClick={togglePlayPause} className="play-pause-button">
            <i className={isPlayingState ? "fas fa-pause" : "fas fa-play"}></i>
          </button>
          <div className="volume-icon">
            <i className={getVolumeIcon()}></i>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
        <div className="song-info">
          <div className="song-title">{song.title}</div>
          <div className="song-artists">{song.artists}</div>
        </div>
      </div>
      <button className="back-button" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default PlayingSong;