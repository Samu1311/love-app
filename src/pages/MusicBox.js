import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/MusicBox.css";

const songs = [
  { id: 1, title: "Por Ti", artists: "3AM", src: "/assets/music/3AM - por-ti.mp3", cover: "/assets/images/vinyl-covers/3AM - por-ti.jpeg" },
  { id: 2, title: "Capaz", artists: "Alleh & Yorghaki", src: "/assets/music/Alleh-y-yorghaki - capaz.mp3", cover: "/assets/images/vinyl-covers/Alleh-y-yorghaki - capaz.jpg" },
  { id: 3, title: "Tranqui, te puedes enamorar", artists: "Alleh & Yorghaki", src: "/assets/music/Alleh-y-yorghaki - tranqui-te-puedes-enamorar.mp3", cover: "/assets/images/vinyl-covers/Alleh-y-yorghaki - tranqui-te-puedes-enamorar.jpg" },
  { id: 4, title: "Chinita Linda", artists: "Álvaro Díaz, Rawayana", src: "/assets/music/Alvaro-Diaz-Rawayana - chinita-linda.mp3", cover: "/assets/images/vinyl-covers/Alvaro-Diaz-Rawayana - chinita-linda.jpg" },
  { id: 5, title: "Enséñame a Bailar", artists: "Bad Bunny", src: "/assets/music/Bad-Bunny - Enséñame-a-bailar.mp3", cover: "/assets/images/vinyl-covers/Bad-Bunny - Enséñame-a-bailar.png" },
  { id: 6, title: "Ojitos Lindos", artists: "Bad Bunny, Bomba Estéreo", src: "/assets/music/Bad-Bunny-Bomba-Estéreo - ojitos-lindos.mp3", cover: "/assets/images/vinyl-covers/Bad-Bunny-Bomba-Estéreo - ojitos-lindos.png" },
  { id: 7, title: "Orion", artists: "Boza, Elena Rose", src: "/assets/music/Boza-Elena-Rose - orion.mp3", cover: "/assets/images/vinyl-covers/Boza-Elena-Rose - orion.jpg" },
  { id: 8, title: "Locked Out of Heaven", artists: "Bruno Mars", src: "/assets/music/Bruno-Mars - locked-out-of-heaven.mp3", cover: "/assets/images/vinyl-covers/Bruno-Mars - locked-out-of-heaven.jpg" },
  { id: 9, title: "Ley Universal", artists: "Danny Ocean", src: "/assets/music/Danny-Ocean - ley-universal.mp3", cover: "/assets/images/vinyl-covers/Danny-Ocean - ley-universal.jpeg" },
  { id: 10, title: "Perfect", artists: "Ed Sheeran", src: "/assets/music/Ed-Sheeran - perfect.mp3", cover: "/assets/images/vinyl-covers/Ed-Sheeran - perfect.jpg" },
  { id: 11, title: "Arroyito", artists: "Fonseca", src: "/assets/music/Fonseca - arroyito.mp3", cover: "/assets/images/vinyl-covers/Fonseca - arroyito.jpg" },
  { id: 12, title: "Te Mando Flores", artists: "Fonseca", src: "/assets/music/Fonseca - te-mando-flores.mp3", cover: "/assets/images/vinyl-covers/Fonseca - te-mando-flores.jpg" },
  { id: 13, title: "Eres Más", artists: "Guaco", src: "/assets/music/Guaco - eres-más.mp3", cover: "/assets/images/vinyl-covers/Guaco - eres-más.jpeg" },
  { id: 14, title: "Si Usted la Viera", artists: "Guaco", src: "/assets/music/Guaco - si-usted-la-viera.mp3", cover: "/assets/images/vinyl-covers/Guaco - si-usted-la-viera.jpeg" },
  { id: 15, title: "The Room Where It Happens", artists: "Hamilton", src: "/assets/music/Hamilton - the-room-where-it-happens.mp3", cover: "/assets/images/vinyl-covers/Hamilton - the-room-where-it-happens.jpeg" },
  { id: 16, title: "Amor de Cine", artists: "Humbe", src: "/assets/music/Humbe - amor-de-cine.mp3", cover: "/assets/images/vinyl-covers/Humbe - amor-de-cine.jpeg" },
  { id: 17, title: "Patadas de Ahogado", artists: "Latin Mafia, Humbe", src: "/assets/music/Latin-Mafia-Humbe - patadas-de-ahogado.mp3", cover: "/assets/images/vinyl-covers/Latin-Mafia-Humbe - patadas-de-ahogado.jpg" },
  { id: 18, title: "La Que Me Gusta", artists: "Los Amigos Invisibles", src: "/assets/music/Los-Amigos-Invisibles - la-que-me-gusta.mp3", cover: "/assets/images/vinyl-covers/Los-Amigos-Invisibles - la-que-me-gusta.png" },
  { id: 19, title: "Coincidir", artists: "Macaco", src: "/assets/music/Macaco - coincidir.mp3", cover: "/assets/images/vinyl-covers/Macaco - coincidir.jpg" },
  { id: 20, title: "La Promesa", artists: "Melendi", src: "/assets/music/Melendi - la-promesa.mp3", cover: "/assets/images/vinyl-covers/Melendi - la-promesa.jpeg" },
  { id: 21, title: "A Vos", artists: "Milo J", src: "/assets/music/Milo-J - a-vos.mp3", cover: "/assets/images/vinyl-covers/Milo-J - a-vos.jpg" },
  { id: 22, title: "Mai", artists: "Milo J", src: "/assets/music/Milo-J - mai.mp3", cover: "/assets/images/vinyl-covers/Milo-J - mai.jpg" },
  { id: 23, title: "Carencias de Cordura", artists: "Milo J, Yami Safdie", src: "/assets/music/Milo-J-Yami-Safdie - carencias-de-cordura.mp3", cover: "/assets/images/vinyl-covers/Milo-J-Yami-Safdie - carencias-de-cordura.jpg" },
  { id: 24, title: "Feriado", artists: "Rawayana", src: "/assets/music/Rawayana - feriado.mp3", cover: "/assets/images/vinyl-covers/Rawayana - feriado.jpeg" },
  { id: 25, title: "Nada Malo", artists: "Rawayana, Bebo Dumont", src: "/assets/music/Rawayana-Bebo-Dumont - nada-malo.mp3", cover: "/assets/images/vinyl-covers/Rawayana-Bebo-Dumont - nada-malo.jpeg" },
  { id: 26, title: "Corazón Adentro (Escorpio)", artists: "Rawayana, Bomba Estéreo", src: "/assets/music/Rawayana-Bomba-Estéreo - corazón-adentro-(escorpio).mp3", cover: "/assets/images/vinyl-covers/Rawayana-Bomba-Estéreo - corazón-adentro-(escorpio).jpg" },
  { id: 27, title: "1-0", artists: "Sech, Elena Rose", src: "/assets/music/Sech-Elena-Rose - 1-0.mp3", cover: "/assets/images/vinyl-covers/Sech-Elena-Rose - 1-0.jpg" },
  { id: 28, title: "Ma Meilleure Ennemie", artists: "Stromae, Pomme", src: "/assets/music/Stromae-Pomme - ma-meilleure-ennemie.mp3", cover: "/assets/images/vinyl-covers/Stromae-Pomme - ma-meilleure-ennemie.jpeg" },
  { id: 29, title: "Alma Dinamita", artists: "Wos", src: "/assets/music/Wos - alma-dinamita.mp3", cover: "/assets/images/vinyl-covers/Wos - alma-dinamita.jpg" },
  { id: 30, title: "Arrancármelo", artists: "Wos", src: "/assets/music/Wos - arrancármelo.mp3", cover: "/assets/images/vinyl-covers/Wos - arrancármelo.jpeg" },
];



function MusicBox() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position from state
    const savedScrollPosition = location.state?.scrollPosition || 0;
    requestAnimationFrame(() => {
      window.scrollTo(0, savedScrollPosition);
    });
  }, [location.state]);

  const playSong = (song) => {
    // Save the current scroll position
    const currentScrollPosition = window.scrollY;
    // Pass the scroll position along with the song to the next screen
    navigate("/playing-song", { state: { song, scrollPosition: currentScrollPosition } });
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
            className="song-button"
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