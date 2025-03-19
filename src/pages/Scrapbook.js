import React from "react";
import { useNavigate } from "react-router-dom";
import HTMLFlipBook from "react-pageflip"; // 📖 Flipbook library
import "../styles/Scrapbook.css";

// Entries with images from the public folder
const entries = [
  { id: 1, title: "Ana Bonita", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/ana-bonita-collage.jpg`, text: "Empecemos con un appreciaton page a la diosa que tengo de novia" },
  { id: 2, title: "Anita Chiquita", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/anita-chiquita.jpg`, text: "Lo más chiquito y hermoso del mundo." },
  { id: 3, title: "Ana Funny", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/ana-funny-collage.jpg`, text: "Porque me encantas aún más cuando tú misma dirías que no" },
  { id: 4, title: "Día de Casas", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/dia-casas-collage.jpg`, text: "Buscando casas juntos. El dñia que me re confirmó lo increíble que sería la vida contigo" },
  { id: 5, title: "Año Nuevo", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/año-nuevo-collage.jpg`, text: "La mejor manera de empezar mi año: contigo" },
  { id: 6, title: "Fiestas", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/fiestas-collage.jpg`, text: "Porque contigo cada plan es único y lleno de color" },
  { id: 7, title: "Wine and Art", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/wine-and-art-collage.jpg`, text: "Ya sea Arte y Vino solos tú y yo" },
  { id: 8, title: "Brunch", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/brunch-collage.jpg`, text: "Brunches con gente que nos quiere (sigues siendo mi persona favorita entre los de las fotos)" },
  { id: 9, title: "IKEA", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/ikea-collage.jpg`, text: "Ir a IKEA, porque hasta eso contigo se siente como una aventura." },
  { id: 10, title: "H&M", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/hm-collage.jpg`, text: "Comprar juntos en H&M (tenemos demasida facha)." },
  { id: 11, title: "Plastilina", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/plastilina-collage.jpg`, text: "Hacer muñequitos en tu cuarto (top días)" },
  { id: 12, title: "Tranvías", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/tranvia-collage.jpg`, text: "Y hasta los paseos en tranvía llenos de amor. Porque contigo Buddinge-CPH siempre se siente como un viaje en el tiempo de lo rápido que se me pasa" },
  { id: 13, title: "Comidas", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/comidas-collage.jpg`, text: "Y obvio nuestro main couple activity: comer juntitos. Y no importa si es en restaurante o en la casa del terror, mientras sea viendo tu carita" },
  { id: 14, title: "Días Nevados", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/dia-nevado-collage.jpg`, text: "Así que por más días juntos caminando por la nieve" },
  { id: 15, title: "Espejos", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/espejos-collage.jpg`, text: "Por más fotos en cada espejo que encontremos mal parado" },
  { id: 16, title: "Feliz", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/feliz-collage.jpg`, text: "Y por la vida llena de amor y emoción que me espera con mi mejor amiga y persona favorita" },
  { id: 17, title: "Roma", image: `${process.env.PUBLIC_URL}/assets/images/scrapbook-images/roma-gian.jpg`, text: "Quién le hubiera dicho a estos dos lo que les esperaba en 4 años?" },
];

function Scrapbook() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="scrapbook-container">
      <HTMLFlipBook width={380} height={840} className="scrapbook-flipbook">
        {/* 🏆 Cover Page */}
        <div className="scrapbook-page cover-page">
          <div className="label">
            <h1>Nuestras Memorias</h1>
            <p>Un repaso a nuestros mejores momentos</p>
            <button className="home-button" onClick={goToHomePage}>Home</button>
            <div className="tape top-left"></div>
            <div className="tape top-right"></div>
            <div className="tape bottom-left"></div>
            <div className="tape bottom-right"></div>
          </div>
        </div>

        {/* 📖 Dynamic Pages */}
        {entries.map((entry) => (
          <div className="scrapbook-page" key={entry.id}>
            <div className="scrapbook-pages-content">
              <div className="scrapbook-page-images">
                <div className="tape top-left"></div>
                <div className="tape top-right"></div>
                <img src={entry.image} alt={entry.title} className="entry-image" />
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
                <div className="tape bottom-left"></div>
                <div className="tape bottom-right"></div>
              </div>
            </div>
          </div>
        ))}

        {/* 📖 Closing Page */}
        <div className="scrapbook-page closing-page">
          <div className="label">
            <h1>Gracias por todos los momentos</h1>
            <p>Te amo un mundo. Y prometo agregar más páginas a este librito a medida que creemos muchos más juntos</p>
            <button className="home-button" onClick={goToHomePage}>Home</button>
            <div className="tape top-left"></div>
            <div className="tape top-right"></div>
            <div className="tape bottom-left"></div>
            <div className="tape bottom-right"></div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Scrapbook;