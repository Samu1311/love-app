import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import LoveMap from "./pages/LoveMap";
import Scrapbook from "./pages/Scrapbook";
import Quiz from "./pages/Quiz";
import MusicBox from "./pages/MusicBox";
import PlayingSong from "./pages/PlayingSong";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="love-map" element={<LoveMap />} />
          <Route path="scrapbook" element={<Scrapbook />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="music-box" element={<MusicBox />} />
          <Route path="playing-song" element={<PlayingSong />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);