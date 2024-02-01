// blog.tsx
import "../assets/scss/App.css";
import imageOne from "../assets/images/ochtend.jpg"
import imageTwo from "../assets/images/lorch.jpg"

function Blog() {
  return (
    <div>
      <header className="Blog-header">
        <h1> My hiking adventures blog 🚶‍♂️ </h1>
        <div className="Blog-images">
            <img src={imageOne} alt="I1" />
            <img src={imageTwo} alt="I2" />
            <div className="Blog-images-text">
              <p> Image one text </p>
              <p> Image two text </p>
            </div>
        </div>
        <div className="Blog-paragraph">
          Sometimes I like to go hiking with my tent and my companion Ben.
          If you'd like to read about my adventures you can do so on:{" "}
          <a href="https://wandernmitbart.wordpress.com/">
            Wandern mit Bart
          </a>
        </div>
      </header>
    </div>
  );
}

export default Blog
