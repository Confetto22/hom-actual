import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Departments from "./components/departments/Departments";
import Overseer from "./components/overseer/Overseer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Overseer />
      <Departments />
      <Footer />
    </>
  );
}

export default App;