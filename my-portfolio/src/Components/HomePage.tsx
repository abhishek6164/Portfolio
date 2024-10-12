import Contact from "./Contact";
import About from "./About";
import Experience from "./Experience"; // Fixed spelling
import Footer from "./Footer";
import Header from "./Header";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <>
      <Toaster />
      <Header />
      <About />
      <Mail />
      <Social />
      <Projects />
      <Skills />
      <Experience /> {/* Fixed spelling */}
      <Contact />
      <Footer />
    </>
  );
}
