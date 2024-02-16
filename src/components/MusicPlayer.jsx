import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const MusicPlayer = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Container>
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prev} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <div className="progress m-3">
                  <div role="progressbar"></div>
                </div>
                {selectedSong && (
                  <div>
                    <h3>{selectedSong.album.title}</h3>
                    <p>{selectedSong.album.artist}</p>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MusicPlayer;
