import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoveMap from "./pages/LoveMap";
import Scrapbook from "./pages/Scrapbook";
import Quiz from "./pages/Quiz";
import MusicBox from "./pages/MusicBox";
import PlayingSong from "./pages/PlayingSong";
import Header from "./components/Header"; // Assuming you have a Header component

function App() {
  return (
    <>
      <Header /> {/* Show the header on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love-map" element={<LoveMap />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/music-box" element={<MusicBox />} />
        <Route path="/playing-song" element={<PlayingSong />} />
      </Routes>
    </>
  );
}

export default App;