import churchLogo from "../../../public/photos/homlogo.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={churchLogo} alt="" id="churchLogo" />
      <button>menu</button>
    </nav>
  );
};

export default Navbar;
