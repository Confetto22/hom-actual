import "./Footer.css";
import churchLogo from "../../../public/photos/homlogo.webp";
import Map from "../map/Map";

const Footer = () => {
  return (
    <footer>
      <img src={churchLogo} alt="" id="footer_logo" />
      {/* <div className="contact_us">
        <p>Contact Us Today!</p>
        <div className="input_form">
          <input type="text" />
          <button className="footer_contact">send</button>
        </div>
      </div> */}
      <hr className="footerDivide" />
      <div className="footer_details">
        <div className="footer_location">
          <h5 className="location_head">
            <i className="fa-solid fa-church"></i>
            Mystery Temple
          </h5>
          <p>Tatop Weija,Accra.</p>
          <p></p>
          <p></p>
        </div>
        <div className="serviceTimes">
          <div className="footer_friService">
            <h5 className="friService_head">
              <i className="fa-solid fa-calendar"></i>
              Fridays
            </h5>
            <p>06:00PM - 08:30PM</p>
          </div>
          <div className="footer_sundays">
            <h5 className="sundays_head">
              <i className="fa-solid fa-calendar"></i>
              Sundays
            </h5>
            <p>07:30AM - 10:45AM</p>
          </div>
        </div>
      </div>
      <Map />
      <div className="in_touch">
        <h5 className="in_touch_head">Stay In Touch</h5>
        <p>follow our socials to stay updated on our latest info</p>
        <div className="socials">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <hr className="footerDivide" />
      <p className="copyright">Copyright&copy;2024 | HOM CHAPEL</p>
    </footer>
  );
};

export default Footer;
