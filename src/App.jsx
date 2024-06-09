import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Nav } from './components/Nav'
import { Footer } from "./components/Footer";

import './App.css'
import { HomePage } from "./pages/HomePage";
import { OurServices } from "./categories/OurServices";
import { Contact } from "./categories/Contact";

function App() {


  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />}/>      
        <Route path="/services" element={<OurServices />}/>      
        <Route path="/contact" element={<Contact />}/>      
      </Routes>

    <Footer />
    </Router>
    </>
  )
}

export default App

