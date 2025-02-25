import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/about-us" element={<About />} />
  <Route exact path="/contact" element={<Contact />} />
  {/* Add more routes here */}
</Routes>
<Footer/>
</BrowserRouter>
  );
}

export default App;
