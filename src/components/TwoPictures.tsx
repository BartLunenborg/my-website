// TwoPictures.tsx
import "../assets/scss/App.css";

interface props {
  pathOne: string;
  textOne: string;
  pathTwo: string;
  textTwo: string;
}

function TwoPictures({ pathOne, textOne, pathTwo, textTwo }:props) {
  return (
    <div className="Two-images">
      <div className="Two-image">
        <img src={pathOne} alt="I1" />
        <div className="Two-image-text">
          <div className="text">
            {textOne}
          </div>
        </div>
      </div>
      <div className="Two-image">
        <img src={pathTwo} alt="I2" />
        <div className="Two-image-text">
          <div className="text">
            {textTwo}
          </div>
        </div>
      </div>
     </div>
  );
}

export default TwoPictures
