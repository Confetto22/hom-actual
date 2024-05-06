import "./Hero.css";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <Navbar />
        <div className="hero_content">
          <h1>
            HOUSE OF MYSTERY <br /> CHAPEL INTERNATIONAL
          </h1>
          <p className="hero_smalltext">
            HOME FOR THE LOST AND BROKEN... <br />
            BUILDING SPIRITUAL COLOSSAL
          </p>
          <button className="about_us">About Us</button>
        </div>
        {/* <div className="scripture_reference">
          <img
            src="../../../public/photos/567A9715.jpg"
            alt=""
            className="scripture_pic"
          />
          <q className="scripture_text">
            I will build my church and the <br /> gates of hell shall not
            prevail...
          </q>
          <img
            src="../../../public/photos/567A9715.jpg"
            alt=""
            className="scripture_pic"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
