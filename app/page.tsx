import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero"
import Food from "./components/Food/Food"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
export default function Home() {
  return (
    <div className="app">
      <NavBar />
      <Hero/>
      <Food/>
      <Contact/>
      <Footer/>
    </div>
  );
}
