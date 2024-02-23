// Contact.tsx
import "../assets/scss/App.css";
import Contacts from "../components/Contacts";

function Contact() {
  return (
    <div>
      <header className="Contact-header">
        <h1> Let's connect! </h1>
        <div className="Contact-paragraph">
        <p>
          If you would like to contact me, feel free to send an email to <a href = "mailto: bart@bartlunenborg.com"> bart@bartlunenborg.com </a>
        <br/><br/>
        Alternatively you can contact me using any of my other links below.
        </p>
        </div>
      </header>
      <Contacts />
    </div>
  );
}

export default Contact;
