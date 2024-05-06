import churchLogo from "../../../public/photos/homlogo.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={churchLogo} alt="" id="churchLogo" />
      <i className="fa-solid fa-bars menuBt"></i>
    </nav>
  );
};

export default Navbar;
