import about from "../images/about.png";
const About = () => {
  return (
    <section class="about" id="about">
      <h1 class="heading">
        <span>about</span>us
      </h1>
      <div class="row">
        <div class="image">
          <img src={about} height="400px" width="400px" />
        </div>
        <div class="content">
          <h3>What makes our coffeee special ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi,
            corporis itaque dolorem voluptas modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            placeat ipsam magnam adipisci?
          </p>
          <a href="#" class="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
