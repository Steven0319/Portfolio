import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <main className="pb-40">
        <ParticlesBackground/>
        <Navbar />
       <Introduction/>
       <AboutMe/>
       <Experience/>
       <Services/>
       <Portfolio/>
       <Contact/>
       <Footer/>
      </main>
    </>
  );
}
