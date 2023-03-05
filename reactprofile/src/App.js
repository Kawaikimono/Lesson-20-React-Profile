// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"
import Navbar from "./components/pages/Navbar"

function App() {  
  return (
   
     <BrowserRouter>
      <Navbar/>
      <div className='body'>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      </div>
     </BrowserRouter>
   
      
  );
}

export default App;
