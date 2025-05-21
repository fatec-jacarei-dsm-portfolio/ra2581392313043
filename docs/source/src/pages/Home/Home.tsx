import Hero from "./sections/Hero/Hero";
import Navbar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import { useMediaQuery } from "@mui/material";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBacground";
import theme from "../../Theme";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isDesktop && <AnimatedBackground />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
