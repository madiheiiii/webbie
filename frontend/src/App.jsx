import {useState, useRef} from 'react';
import './App.css'
import dropSound from "../components/audio/drop_002.ogg";
import SpotifyWidget from "./Spotify";

export default function App() {
  const [mainWindow, setMainWindow] = useState(false);
  const audio = useRef(null);
return (
    <div className="page">
    <audio ref={audio} src={dropSound} />
    <div className="cloud1"></div>
    <div className="cloud2"></div>
    <div className="vinyl rotate-scale-up"></div>
    <div className="fox"></div>
    <div className="name"></div>
    <SpotifyWidget />

    <div className="menuButtons">
    <button
      type="button"
      className="about"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}
    ></button>
    <button
      type="button"
      className="links"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}
    ></button>
    <button
      type="button"
      className="contact"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}
    ></button>
    <button
      type="button"
      className="work"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}
    ></button>
    </div>

    {mainWindow && (
      <div className="mainWindow">
          <button type="button" className="exit" onClick={() => {audio.current.currentTime = 0; audio.current.play(); setMainWindow(!mainWindow)}}></button>
      </div>
    )}
  
  </div>
);
}