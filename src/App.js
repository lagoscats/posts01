import React from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import Home from './Home';      // Import the Home section
import About from './About';    // Import the About section
import Services from './Services';  // Import the Services section
import Contact from './Contact';    // Import the Contact section

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
