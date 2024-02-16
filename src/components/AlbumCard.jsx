import { selectSong } from "../redux/actions";
import { useDispatch } from "react-redux";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSong(singleSong));
    console.log("handleClick funziona"); // Invia tutti i dettagli della canzone selezionata
  };

  return (
    <div className="col text-center" onClick={handleClick}>
      <img
        className="img-fluid"
        src={singleSong.album.cover_medium}
        alt="track"
      />
      <p>
        Track: {singleSong.title}
        <br />
        Artist: {singleSong.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
