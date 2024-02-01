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
            Welcome to my personal website
          </h1>
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
        <p>
          This page is currently under construction.
        </p>
      </header>
      <Contacts />
    </div>
  );
}

export default Home;
