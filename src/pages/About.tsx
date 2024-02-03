// About.tsx
import "../assets/scss/App.css";
import me from "../assets/images/me.jpg";
import Contacts from "../components/Contacts";

function About() {
  return (
  <div>
    <header className="About-header">
      <h1> About me </h1>
      <div className="About-content">
        <div className="About-paragraph">
          <p className="About-paragraph">
            I am a second year student at the University of Groningen studying computing science.
            Before starting my bachelor in computing science I studied and finished a bachelor in economics and business economics (E&BE).
            The courses in the E&BE programme have provided me with a solid basis and framework with regards to finance and decision making within firms from an economic viewpoint.
          </p>
          <p className="About-paragraph">
            In my free time I enjoy refining my programming skills. 
            This website is the product of one such endeavour. 
            Apart from coding, I'm also a great fan of classical music. 
            Playing piano and violin helps me find tranquillity and inspiration.
            Learning to play the piano and violin has taught me that with effort, consistency, and perseverance one can reach their goals.
          </p>
        </div>
        <img src={me} className="About-picture" alt="me" />
      </div>
    </header>
    <Contacts />
  </div>
  );
}

export default About;
