import { useState } from "react";
import VideoInput from "./components/VideoInput";
import CaptionInput from "./components/CaptionInput";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  const [videoURL, setVideoURL] = useState("");
  const [captions, setCaptions] = useState([]);

  return (
    <div className="App">
      <h1 className="header-text">Video Caption App</h1>
      <VideoInput setVideoURL={setVideoURL} />
      <CaptionInput setCaptions={setCaptions} />
      <VideoPlayer videoURL={videoURL} captions={captions} />
    </div>
  );
}

export default App;
