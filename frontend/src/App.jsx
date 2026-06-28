import {useState, useRef} from 'react';
<link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'></link>
import './App.css'
import dropSound from "../components/audio/drop_002.ogg";
import SpotifyWidget from "../src/Spotify";
import illustration1 from "../art/illustration1.jpg";
import illustration2 from "../art/illustration2.jpg";
import illustration3 from "../art/illustration3.jpg";
import illustration4 from "../art/illustration4.jpg";
import illustration5 from "../art/illustration5.jpg";
import luminarium from "../cs_projects/luminarium.jpg";
import lilguys from "../cs_projects/lilguys.jpg";
import ToJam from "../cs_projects/ToJam.jpg";
import painting1 from "../art/painting1.jpg";
import painting2 from "../art/painting2.jpg";

export default function App() {
  const [mainWindow, setMainWindow] = useState(false);
  const [aboutWindow, setAboutWindow] = useState(false);
  const audio = useRef(null);
  const [workWindow, setWorkWindow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [linksWindow, setLinksWindow] = useState(false);
  const [contactWindow, setContactWindow] = useState(false);
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
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setLinksWindow(!linksWindow)}}
    ></button>
    <button
      type="button"
      className="contact"
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setContactWindow(!contactWindow)}}
    ></button>
    <button
      type="button"
      className="work"
      onClick={() => {
        audio.current.currentTime = 0;
        audio.current.play();
        setWorkWindow(true);
      }}
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
              <li>(i'm also getting more into having fun leetcoding)</li>
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
              <li>music, listening and making (i've only had my hands on piano though~)</li>
              <li>digital art, i used to do illustrations and 2d animation at Tehran Fine Arts School for Girls</li>
              <li>learning languages, currently working on German and Mandarin Chinese!</li>
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
    {contactWindow && (
      <div className="contactWindow">
        <div className = "header">
          <button type="button" className="exit"  onClick={() => {audio.current.currentTime = 0; audio.current.play(); setContactWindow(!contactWindow)}} style={{ fontFamily: 'Indie Flower', fontSize: '20px' }}>
            <p>[x]</p>
          </button>
          <div className = "titleAbout" style={{ fontFamily: 'Indie Flower', fontSize: '30px' }}>
            <p>contact</p>
          </div>
        </div>
        <div className="contactScroll">
          <div className="contactIntro" style={{ fontFamily: 'Indie Flower', fontSize: '20px' }}>
            <h2>hehe do you want to reach out?^^</h2>
            <p>the easiest way to reach out to me is through email! i'd love to hear from you.</p>
            <ul>
              <li>soo, you can email me at: <a href="mailto:maddieetorab@gmail.com">maddieetorab@gmail.com</a></li>
            </ul>
            <p>or you can click this tiny button below:</p>

          </div>
        </div>
      </div>
    )}
    {linksWindow && (
      <div className="linksWindow">
        <div className = "header">
          <button
            type="button"
            className="exit"
            onClick={() => {
              audio.current.currentTime = 0;
              audio.current.play();
              setLinksWindow(false);
            }}
            style={{ fontFamily: "Indie Flower", fontSize: "20px" }}> [x]
          </button>
          <div className="titleAbout" style={{ fontFamily: "Indie Flower", fontSize: "30px" }}>
            <p>links</p>
          </div>
          </div>
          <div className="linkScroll">
            <section className="linkIntro">
              <h1>i shall update this tab with my socials and youtube when i work on them more!♡</h1>
            </section>
        </div>

        </div>
    )}
    {workWindow && (
  <div className="workWindow">
    <div className="header">
      <button
        type="button"
        className="exit"
        onClick={() => {
          audio.current.currentTime = 0;
          audio.current.play();
          setWorkWindow(false);
        }}
        style={{ fontFamily: "Indie Flower", fontSize: "20px" }}
      >
        [x]
      </button>

      <div
        className="titleAbout"
        style={{ fontFamily: "Indie Flower", fontSize: "30px" }}
      >
        <p>showing my work</p>
      </div>
    </div>
      
    <div className="workScroll">
      <section className="workIntro">
        <h1>things i've made ♡</h1>
        <p>
          a small collection of my work across computer science, and art.
        </p>
      </section>
      
      <section className="workOffers">
        <h1>I accept offers through my <a href="mailto:maddieetorab@gmail.com">email</a>!</h1>
      </section>

      <section className="workSection">
        <h2>computer science</h2>

        <div className="projectGrid">
          <article className="projectCard">

            <div className="projectText">
              <h3>Gradify</h3>
              <p>
                A full-stack grading platform where professors can create
                assignments and students can submit Java code for automated
                testing, style feedback, and AI feedback. As a researcher, I added features 
                for checking code style and made it accessible through frontend.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Java</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/madiheiiii/checkstyleCustomErrorMessages"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
          <article className="projectCard">
            <button
              type="button"
              className="projectImageButton"
              onClick={() => setSelectedImage(luminarium)}
              aria-label="Open Luminarium Phantoms project preview"
            >
              <img
                src={luminarium}
                alt="Luminarium Phantoms project preview"
                className="projectImage"
              />
            </button>
            <div className="projectText">
              <h3>Luminarium Phantoms</h3>
              <p>An audio-reactive generative art project using p5.js that responds to live microphone input with changing colors, movement, and visual effects and creates adjustable mandala-style patterns using symmetry, random walkers, and UI controls for brush size, color, and visual style.</p>

              <div className="tags">
                <span>P5.js</span>
                <span>JavaScript</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://editor.p5js.org/madiheiiii/full/XE-5ZFf6H"
                  target="_blank"
                  rel="noreferrer"
                >
                  P5.js
                </a>
              </div>
            </div>
          </article>
          <article className="projectCard">
            <button
              type="button"
              className="projectImageButton"
              onClick={() => setSelectedImage(ToJam)}
              aria-label="Open ToJam project preview"
            >
              <img
                src={ToJam}
                alt="ToJam project preview"
                className="projectImage"
              />
            </button>
            <div className="projectText">
              <h3>The Secret War(between Cows and Goats)</h3>
              <p>َA game made in a team of 4 for the 2025 TOJam showcasing the theme of the jam with the goat.</p>

              <div className="tags">
                <span>Aseperite</span>
                <span>pixel art</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://ndjia.itch.io/tojam2025"
                  target="_blank"
                  rel="noreferrer"
                >
                  itch.io
                </a>
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/NDJia/tojam2025"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
          <article className="projectCard">
            <button
              type="button"
              className="projectImageButton"
              onClick={() => setSelectedImage(lilguys)}
              aria-label="Open Lil Guys project preview"
            >
              <img
                src={lilguys}
                alt="Lil Guys project preview"
                className="projectImage"
              />
            </button>
            <div className="projectText">
              <h3>Lil Guys</h3> <p>in progress</p>
              <p>A group project as a gamified productivity tool that combines a web app and Chrome extension to track browsing behavior and turn it into an item collecting game experience.</p>

              <div className="tags">
                <span>P5.js</span>
                <span>JavaScript</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/madiheiiii/LilGuy"
                  target="_blank"
                  rel="noreferrer"
                >
                  P5.js
                </a>
              </div>
            </div>
          </article>

          <article className="projectCard">
            <div className="projectPlaceholder">
              <p>future project...</p>
            </div>

            <div className="projectText">
              <h3>HCI / AR Research Idea</h3>
              <p>
                Early exploration into immersive tools, and exposure-based interaction design.
              </p>

              <div className="tags">
                <span>Unity</span>
                <span>AR/VR</span>
                <span>Research</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="workSection">
        <h2>illustrations and paintings</h2>

        <div className="artGrid">
          {[
            illustration1,
            illustration2,
            illustration3,
            illustration4,
            illustration5,
            painting1,
            painting2,
          ].map((image, index) => (
            <button
              key={image}
              className="artPiece"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Illustration ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      <section className="workSection">
        <h2> art-related achievements:</h2>
        <p>stop motion award, secondary art school - 2024</p>
        <a
          href="https://www.pana.ir/%D8%A8%D8%AE%D8%B4-%D9%81%D8%B1%D9%87%D9%86%DA%AF%DB%8C-32/1462984-%D8%A8%D8%B1%DA%AF%D8%B2%DB%8C%D8%AF%DA%AF%D8%A7%D9%86-%D8%AC%D8%B4%D9%86%D9%88%D8%A7%D8%B1%D9%87-%D9%87%D8%A7%DB%8C-%D9%87%D9%86%D8%B1%DB%8C-%D9%85%D8%AF%D8%B1%D8%B3%D9%87-%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D8%B4%D8%AF%D9%86%D8%AF"
          target="_blank"
          rel="noreferrer"
        >
          More information (in Persian)
        </a>
      </section>
      <section className="workSection">
        <h2>other Developments:</h2>
        <p>* this website!^^</p>
        <p>* thaaaat's it for now! there are other projects in progress which i'll release updates for here soon!</p>

      </section>
    </div>

{selectedImage && (
  <div className="imageModal" onClick={() => setSelectedImage(null)}>
    <img src={selectedImage} alt="Selected artwork" />
  </div>
)}
  
  </div>
)}
</div>
  );
}