import React, { useEffect, useRef } from "react";

const MusicPlayer = ({ song, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="player">
      <audio ref={audioRef} src={song.src} controls />
      <p>Now Playing: {song.title}</p>
    </div>
  );
};

export default MusicPlayer;
