import About from './components/About';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import { Navbar } from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
