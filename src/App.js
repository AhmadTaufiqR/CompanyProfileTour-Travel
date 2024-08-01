import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Testimoni from "./Components/Testimoni/Testimoni";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimoni/>
    </>
  );
};

export default App;
