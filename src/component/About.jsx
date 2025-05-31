import about from "../images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span>us
      </h1>
      <div className="row">
        <div className="image">
          <img src={about} height="400px" width="400px" alt="About us" />
        </div>
        <div className="content">
          <h3>What makes our coffee special?</h3>
          <p>
            From the first rich aroma to the last comforting sip, our coffee is crafted to brighten your day and fuel your passions.
          </p>
          <p>
            More than just a brew, coffee is a story in every cup — of dedication, flavor, and the simple joy of slowing down.
          </p>
          <Link to="/learnmore" className="btn">
            learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
