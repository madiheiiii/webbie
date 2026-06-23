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

export default function App() {
  const [mainWindow, setMainWindow] = useState(false);
  const [aboutWindow, setAboutWindow] = useState(false);
  const audio = useRef(null);
  const [workWindow, setWorkWindow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [linksWindow, setLinksWindow] = useState(false);
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
      onClick={() => {audio.current.currentTime = 0; audio.current.play(); setAboutWindow(!aboutWindow)}}
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
          <div className="linkScroll">
      <section className="linkIntro">
        <h1>things i've made ♡</h1>
        <p>
          a small collection of my work across computer science, illustration,
          painting, and animation.
        </p>
      </section>
        <div className="animationGrid">
        <div className="animationCard">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Animation reel"
            allowFullScreen
          ></iframe>
          </div>
          </div>
        </div>

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
          a small collection of my work across computer science, illustration,
          painting, and animation.
        </p>
      </section>

      <section className="workSection">
        <h2>computer science</h2>

        <div className="projectGrid">
          <article className="projectCard">
            <img
              src="/projects/gradify.png"
              alt="Gradify project preview"
              className="projectImage"
            />

            <div className="projectText">
              <h3>Gradify</h3>
              <p>
                A full-stack grading platform where professors can create
                assignments and students can submit Java code for automated
                testing, style feedback, and AI feedback.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Java</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/your-username/gradify"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="projectCard">
            <img
              src="/projects/portfolio.png"
              alt="Portfolio website preview"
              className="projectImage"
            />

            <div className="projectText">
              <h3>Personal Portfolio</h3>
              <p>
                A playful interactive portfolio inspired by music, desktop
                interfaces, animation, and hand-drawn visual design.
              </p>

              <div className="tags">
                <span>React</span>
                <span>CSS</span>
                <span>Responsive Design</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
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
                Early exploration into immersive tools, computer vision, and
                exposure-based interaction design.
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
        <h2>illustration</h2>

        <div className="artGrid">
          {[
            illustration1,
            illustration2,
            illustration3,
            illustration4,
            illustration5,
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
        <h2>painting</h2>

        <div className="paintingGrid">
          {[
            "/art/painting1.jpg",
            "/art/painting2.jpg",
            "/art/painting3.jpg",
          ].map((image, index) => (
            <button
              key={image}
              className="paintingPiece"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Painting ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      <section className="workSection">
        <h2>animation</h2>

        <div className="animationGrid">
          <div className="animationCard">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Animation reel"
              allowFullScreen
            ></iframe>

            <p>hand-drawn animation reel</p>
          </div>

          <div className="animationCard">
            <img
              src="/animations/animation-preview.gif"
              alt="Animation preview"
            />
            <p>2D character animation study</p>
          </div>
        </div>
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