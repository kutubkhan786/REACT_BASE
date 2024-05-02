import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Gallery from "./pages/Gallery";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";

// import Services from "../Components/Services";
// import CustomerReasons from "../Components/CustomerReasons";
import Footer from "../src/components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Navbar />
        </nav>
        <main>
        <nav className="HomeSection">
          <Home />
        </nav>
        <nav className="AboutSection">
          <About />
        </nav>
        <nav className="GallerySection">
          <Gallery />
        </nav>
        <nav className="ArtistSection">
          <Artist />
        </nav>
        <nav className="TestimonialSection">
          <Testimonial />
        <nav className="BlogSection">
          <Blog />
        </nav>
        </nav>
        <nav className="ContactSection">
          <Contact />
        </nav>

          <Routes>
            {/* <Route path="/" exact component={Front} />
            <Route path="/services" component={Services} />
            <Route path="/customer-reasons" component={CustomerReasons} /> */}
          </Routes>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
