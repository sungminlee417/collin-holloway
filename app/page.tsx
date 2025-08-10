import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Concerts from "../components/Concerts";
import Press from "../components/Press";
import Music from "../components/Music";
import Videos from "../components/Videos";
import Performances from "../components/Performances";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center min-w-screen">
      <Navigation />
      <Hero />
      <About />
      <Concerts />
      <Press />
      <Music />
      <Videos />
      <Performances />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
