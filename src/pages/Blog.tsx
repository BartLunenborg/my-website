// blog.tsx
import TwoPictures from "../components/TwoPictures";
import "../assets/scss/App.css";
import imageOne from "../assets/images/ochtend.jpg"
import imageTwo from "../assets/images/lorch.jpg"

function Blog() {
  return (
    <div>
      <header className="Blog-header">
        <h1> My hiking adventures 🚶‍♂️ </h1>
        <TwoPictures
          pathOne={imageOne}
          textOne="Early morning view on Trechtingshausen."
          pathTwo={imageTwo}
          textTwo="The Rhine seen from Lorch."
        />
        <hr className="Blog-line" />
        <div className="Blog-paragraph">
          In 2024 I embarked on my first long-distance hike, walking 10 stages of the Rheinsteig.
          This journey took me through the picturesque Rhine valley, offering beautiful views and enchanting moment.
          Every day I documented my experiences in little blog posts.
          If you're interested in reading about my Rheinsteig experience or would like to follow me on future journeys, my blog can be found on:{" "}
          <a className="App-link" href="https://wandernmitbart.wordpress.com/">
            Wandern mit Bart
          </a>
        </div>
      </header>
    </div>
  );
}

export default Blog
