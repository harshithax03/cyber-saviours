import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Nav } from './components/Nav'
import { Footer } from "./components/Footer";

import './App.css'
import { HomePage } from "./pages/HomePage";

function App() {


  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />}/>      
      </Routes>

    <Footer />
    </Router>
    </>
  )
}

export default App

