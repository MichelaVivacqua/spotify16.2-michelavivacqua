import { selectSong } from "../redux/actions";
import { useDispatch } from "react-redux";
import { toggleLike } from "../redux/actions";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSong(singleSong));
    console.log("handleClick funziona"); // Invia tutti i dettagli della canzone selezionata
  };

  const handleLikeClick = () => {
    dispatch(toggleLike(singleSong.id));
  };

  return (
    <div className="col text-center">
      <img
        className="img-fluid"
        src={singleSong.album.cover_medium}
        alt="track"
        onClick={handleClick}
      />
      <p onClick={handleClick}>
        Track: {singleSong.title}
        <br />
        Artist: {singleSong.artist.name}
      </p>
      <button onClick={handleLikeClick}>
        {singleSong.liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default AlbumCard;
