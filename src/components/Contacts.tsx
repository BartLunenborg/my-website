// Contacts.tsx
import React from 'react';
import '../assets/scss/App.css';

interface ContactProps {
  platform: string;
  username: string;
  link: string;
}

const Contact: React.FC<ContactProps> = ({ platform, username, link }) => {
  return (
    <p>
      {platform}:{" "}
      <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {username}
      </a>
    </p>
  );
};

function Contacts() {
  return (
    <div className="Contacts-div">
      <Contact
        platform="Instagram 📸"
        username="bartlunenb"
        link="https://www.instagram.com/bartlunenb/"
      />
      <Contact
        platform="Goodreads 📚"
        username="Bart Lunenborg"
        link="https://www.goodreads.com/user/show/162065852-bart-lunenborg"
      />
    </div>
  );
};

export default Contacts;
