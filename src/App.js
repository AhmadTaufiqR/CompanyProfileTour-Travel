import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Testimoni from "./Components/Testimoni/Testimoni";
import Plan from "./Components/Plan/Plan.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contacts from "./Components/Contact/Contacts.jsx";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimoni/>
      <Plan />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
