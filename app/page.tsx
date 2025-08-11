import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Concerts from "../components/Concerts";
import Music from "../components/Music";
import Videos from "../components/Videos";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SkipNavigation from "../components/SkipNavigation";
import { 
  getHeroData, 
  getAboutData, 
  getConcertsData, 
  getMusicData, 
  getVideosData, 
  getGalleryData, 
  getContactData, 
  getSiteConfig,
  HeroData,
  AboutData,
  ConcertData,
  MusicData,
  VideoData,
  GalleryData,
  ContactData,
  SiteConfig
} from "../lib/markdown";

export default async function Home() {
  // Fetch all markdown data
  const [
    heroData,
    aboutData,
    concertsData,
    musicData,
    videosData,
    galleryData,
    contactData,
    siteConfig
  ] = await Promise.all([
    getHeroData(),
    getAboutData(),
    getConcertsData(),
    getMusicData(),
    getVideosData(),
    getGalleryData(),
    getContactData(),
    getSiteConfig()
  ]) as [HeroData, AboutData, ConcertData, MusicData, VideoData, GalleryData, ContactData, SiteConfig];
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900 flex flex-col">
      <SkipNavigation />
      <Navigation siteConfig={siteConfig} />
      <main id="main-content">
        <Hero heroData={heroData} siteConfig={siteConfig} />
        <About aboutData={aboutData} />
        <Concerts concertsData={concertsData} />
        <Music musicData={musicData} />
        <Videos videosData={videosData} />
        <Gallery galleryData={galleryData} />
        <Contact contactData={contactData} />
      </main>
      <Footer />
    </div>
  );
}
