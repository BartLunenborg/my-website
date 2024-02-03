// Home.tsx
import "../assets/scss/App.css";
import logo from "../assets/images/bl.svg";
import Contacts from "../components/Contacts";

function Home() {
  return (
    <div>
      <header className="Home-header">
        <div className="Home-header-content">
          <h1>
            Welcome to bartlunenborg.com
          </h1>
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
        <p className="Home-paragraph">
          Hi there, and welcome to my personal website.
          My name is Bart Lunenborg and I'm a second year Computer Science student at the Rijksuniversiteit Groningen.
          I made this website as a fun little side project and to learn React and Typescript.
        </p>
        <p className="Home-paragraph">
          Thank you for checking out my website.
        </p>
      </header>
      <Contacts />
    </div>
  );
}

export default Home;
