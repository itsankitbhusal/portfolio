import React from "react";
import Footer from "./components/footer/Footer";
import Current from "./components/hero/Current";
import Hero from "./components/hero/Hero";
import Services from "./components/hero/services/Services";

import Nav from "./components/navbar/Nav";
import Recent from "./components/recent/Recent";
import SchrollToTop from "./components/SchrollToTop";

const App = () => {
  return (
    <>
      <Nav />

      <Hero />
      <Current />
      <Services />
      <Recent />
      <Footer />
      <SchrollToTop />
    </>
  );
};

export default App;
