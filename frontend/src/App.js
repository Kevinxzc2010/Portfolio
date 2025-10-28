import "./App.css";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./i18n.js"; // ← 添加这行
import MusicPlayer from "./components/MusicPlayer.js";
import QuickContact from "./components/QuickContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MusicPlayer />
      <QuickContact />
    </BrowserRouter>
  );
}

export default App;
