import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Frontend from './frontend_components/Frontend';  // Create this component
import Backend from './backend_components/Backend';    // Create this component
import Frontend_content from './components/Frontend_content';
import Backend_content from './components/Backend_content';
import FullStack_content from './components/FullStack_content';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Routes>
            <Route path="/" element={<> <Home /> 
            <Frontend_content />
            <Backend_content />
            <FullStack_content />
            </>} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/backend" element={<Backend />} />
            
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
