import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/artists/2");
  };

  return (
    <div>
      <h1>Bienvenido a la Librería Musical</h1>
      <p>Explora artistas y géneros musicales.</p>
      <button onClick={handleSearch}>Buscar mi Artista Favorito (2)</button>
    </div>
  );
}
