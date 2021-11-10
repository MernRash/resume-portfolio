import React from "react";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import Portfolio from "../portfolio/portfolio";
import Resume from "../resume/resume";
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import About from "../about/about";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
