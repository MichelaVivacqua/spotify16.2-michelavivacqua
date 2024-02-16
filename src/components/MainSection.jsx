import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const MainPage = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  const fillMusicSection = async (artistName, setSongs) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let { data } = await response.json();
        setSongs(data.slice(0, 4));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection("queen", setRockSongs);
    fillMusicSection("katyperry", setPopSongs);
    fillMusicSection("eminem", setHipHopSongs);
  }, []);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Container>
        <Row className="mainLinks d-none d-md-block">
          <a href="#" className="m-3">
            TRENDING
          </a>
          <a href="#" className="m-3">
            PODCAST
          </a>
          <a href="#" className="m-3">
            MOODS AND GENRES
          </a>
          <a href="#" className="m-3">
            NEW RELEASES
          </a>
          <a href="#" className="m-3">
            DISCOVER
          </a>
        </Row>
        <Row>
          <h2 className="text-white mt-5 text-start">Rock Classics</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          >
            {rockSongs.map((song, index) => (
              <AlbumCard key={index} singleSong={song} />
            ))}
          </div>
        </Row>
        <Row>
          <h2 className="text-white mt-5 text-start">Pop Culture</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="popSection"
          >
            {popSongs.map((song, index) => (
              <AlbumCard key={index} singleSong={song} />
            ))}
          </div>
        </Row>
        <Row>
          <h2 className="text-white mt-5 text-start">#HipHop</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="hipHopSection"
          >
            {hipHopSongs.map((song, index) => (
              <AlbumCard key={index} singleSong={song} />
            ))}
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default MainPage;
