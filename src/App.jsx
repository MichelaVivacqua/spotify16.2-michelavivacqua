import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainSection />
          <MusicPlayer />
        </div>
      </div>
    </>
  );
}

export default App;
