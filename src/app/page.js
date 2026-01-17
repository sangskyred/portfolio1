
import SectionHero from "../../components/Section/SectionHero";
import SectionSkills from "../../components/Section/SectionSkills";
import SectionResum from "../../components/Section/SectionResume2";
import SectionContact from "../../components/Section/SectionContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className='data-overlay-container'>
      <div id="main" className="main">
        <header className="header">
          <Navbar />
        </header>
        <main className="main-content">
          <div className="container">
            <SectionHero />
          </div>
          <SectionSkills />
          <SectionResum />
          <SectionContact />

        </main>
        <footer>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
}
