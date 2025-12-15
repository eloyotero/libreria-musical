import { useParams } from "react-router-dom";
import { ARTIST_DATA } from "./Artists";

export default function ArtistDetail() {
  const { artistId } = useParams();
  const artist = ARTIST_DATA.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <div>
        <h2>404 - Artista no encontrado</h2>
        <p>El artista que buscas no está en la librería.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{artist.name}</h2>
      <p>Género: {artist.genre}</p>
      {artist.name === "Extremoduro" && (
        <p>
          Extremoduro es una banda española de rock conocida por sus letras
          poéticas y su estilo rebelde.
        </p>
      )}
      {artist.name === "Michael Jackson" && (
        <p>
          Michael Jackson, el “Rey del Pop”, revolucionó la música y el baile
          con su talento único.
        </p>
      )}
      {artist.name === "Louis Armstrong" && (
        <p>
          Louis Armstrong fue un trompetista y cantante de jazz que marcó la
          historia con su voz y estilo.
        </p>
      )}
    </div>
  );
}
