import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import Home from '../src/pages/Home/Index';
import Technology from '../src/pages/Technology/Index';
import Contact from '../src/pages/Contact/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
