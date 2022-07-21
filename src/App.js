import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import OurHostels from './components/OurHostels';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourhostels" element={<OurHostels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;