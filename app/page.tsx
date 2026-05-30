import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Food from "./components/Food/Food";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="app">
      <NavBar />

   <section  id="home" className="herosection">
   <Hero />
   </section>

      <section id="stay" className="herosection">
        <Food />
      </section>

      <section id="contact" className="herosection">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
