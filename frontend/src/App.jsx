import {useState, useRef} from 'react';
import './App.css'
import dropSound from "../components/audio/drop_002.ogg";

export default function App() {
  const [mainWindow, setMainWindow] = useState(false);
  const audio = useRef(null);
return (
  <div>
    <audio ref={audio} src={dropSound} />
    <div className="cloud1"></div>
    <div className="cloud2"></div>
    <div className="vinyl rotate-scale-up"></div>
    <button
      type="button"
      className="fileButton"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}
    ></button>

    {mainWindow && (
      <div className="mainWindow">
          <button type="button" className="exit" onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}></button>
      </div>
    )}

  </div>
);
}