import {useState, useRef} from 'react';
<link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'></link>
import './App.css'
import dropSound from "../components/audio/drop_002.ogg";
import SpotifyWidget from "./Spotify";

export default function App() {
  const [mainWindow, setMainWindow] = useState(false);
  const [aboutWindow, setAboutWindow] = useState(false);
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
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setAboutWindow(!aboutWindow)}}
    ></button>
    <button
      type="button"
      className="links"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setAboutWindow(!aboutWindow)}}
    ></button>
    <button
      type="button"
      className="contact"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setAboutWindow(!aboutWindow)}}
    ></button>
    <button
      type="button"
      className="work"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setAboutWindow(!aboutWindow)}}
    ></button>
    </div>

    {aboutWindow && (
      <div className="aboutWindow">
        <div className = "header">
          <button type="button" className="exit"  onClick={() => {audio.current.currentTime = 0; audio.current.play(); setAboutWindow(!aboutWindow)}} style={{ fontFamily: 'Indie Flower', fontSize: '20px' }}>
            <p>[x]</p>
          </button>
          <div className = "titleAbout" style={{ fontFamily: 'Indie Flower', fontSize: '30px' }}>
            <p>about</p>
          </div>
        </div>
        <div className="aboutTop">
          <div className = "profilePicture"></div>
          <div className="aboutIntro" style={{ fontFamily: 'Indie Flower', fontSize: '20px' }}>
            <h2>Madiheh Mirtorabi</h2>
            <h2>مدیحه میرترابی</h2>
            <p>Toronto-based computer science student</p>
            <p>Research Assistant at York University</p>
          </div>
        </div>
        <div className ="aboutScroll">
          <div className="aboutIntro" style={{ fontFamily: 'Indie Flower' }}>
            <p>hi! my name is maddie. i...</p>
            <ul>
              <li>build websites, responsive visual projects, and anything that picks my interest</li>
              <li>work on research projects at school (check out projects for more information)</li>
              <li>make illustrations, hand-drawn animations, and crafts for myself and the people I care about, and</li>
              <li>work on my hci project idea</li>
              <li>(i'm also getting more into having fun while leetcoding)</li>
            </ul>
            <strong>Education</strong>
            <div className="educationItem">
              <h1>Bachelor of Computer Science </h1>
              <p style={{ fontSize: "14px", color: '#aab4bc'}}> 2024-2028, currently in third year</p>
            </div>
            <strong>Other Interests</strong>
            <ul>
              <li>cooking, I looove trying new recipes. my recent favorites are Bulgogi and Çılbır.</li>
              <li>reading! fiction and sometimes non-fictions</li>
              <li>cookin</li>
              <li>music, listening and making (i've only had my hands on piano though~)</li>
              <li>digital art, i used to do illustrations and 2d animation at Tehran Fine Arts School for Girls</li>
              <li>learning languages, currently working on German!</li>
            </ul>
            <strong>Languages</strong>
            <div className="languagesItem">
                  <h1 style={{fontSize: "18px"}}> i have native fluency in <span className="orangeText">English</span> and{" "}
                    <span className="orangeText">Persian(Farsi)</span>.
                  </h1>
              <p style={{ fontSize: "11px" }}>I am also learning German, and I know some Japanese here and there</p>
            </div>
          </div>
        </div>
      </div>
    )}
  
  </div>
);
}