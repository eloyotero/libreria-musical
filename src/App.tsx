import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Artists from "./components/Artists";
import ArtistDetail from "./components/ArtistDetail";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:artistId" element={<ArtistDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
