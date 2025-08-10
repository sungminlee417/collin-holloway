import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Concerts from "../components/Concerts";
import Music from "../components/Music";
import Videos from "../components/Videos";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import BackToTop from "../components/BackToTop";
import SkipNavigation from "../components/SkipNavigation";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900 flex flex-col">
      <SkipNavigation />
      <ThemeToggle />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Concerts />
        <Music />
        <Videos />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
