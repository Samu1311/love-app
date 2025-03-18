import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MusicBox.css";

const songs = [
  { id: 1, title: "Chinita Linda", artists: "Álvaro Díaz, Rawayana", src: "/assets/music/Alvaro Diaz, Rawayana - Chinita Linda (Audio).mp3", cover: "/assets/images/chinita-linda.jpg" },
  { id: 2, title: "Corazón Adentro (Escorpio)", artists: "Bomba Estéreo, Rawayana", src: "/assets/music/Bomba Estéreo, Rawayana, ASTROPICAL - Corazón Adentro (Escorpio) (Audio).mp3", cover: "/assets/images/astropical.jpg" },
  { id: 3, title: "Capaz", artists: "Alleh & Yorghaki", src: "/assets/music/Alleh & Yorghaki - capaz OFFICIAL VERSION.mp3", cover: "/assets/images/capaz.jpg" },
  { id: 4, title: "Tranqui, te puedes enamorar", artists: "Alleh & Yorghaki", src: "/assets/music/Alleh & Yorghaki - tranqui te puedes enamorar OFFICIAL VERSION.mp3", cover: "/assets/images/la-ciudad.jpg" },
];

function MusicBox() {
  const navigate = useNavigate();

  const playSong = (song) => {
    navigate("/playing-song", { state: { song } });
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="music-box-container">
      <h1>Nuestra Rocola</h1>
      <p>La música que nos une</p>
      <div className="song-list">
        {songs.map((song) => (
          <button
            key={song.id}
            onClick={() => playSong(song)}
            className="song-button" // Ensure consistent styling
          >
            <div className="song-title">{song.title}</div>
            <div className="song-artists">{song.artists}</div>
          </button>
        ))}
      </div>
      <button className="home-button" onClick={goToHomePage}>
        <i className="fas fa-home"></i> Home
      </button>
    </div>
  );
}

export default MusicBox;