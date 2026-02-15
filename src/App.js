import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import './App.css';
import Home from './pages/Home';
import SouthAfrica from './pages/South Africa/SouthAfrica';
import RahinoDetails from './pages/RahinoDetails';
import JapanHome from './pages/Japan/Japan';
import JapanGuide from './pages/Japan/JapanGuide';
import SumoExperience from './pages/Japan/SumoExperience';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />
            <Route path="/blog" element={<Blog />} />
            {/* Add more routes as needed */}
            {/* adding the route for the home page */}
            <Route path="/home" element={<Home/>} />

            {/* routes for the south africa home */}
            <Route path="/south-africa" element={<SouthAfrica/>} />
            <Route path="/south-africa/rhino-tracking" element={<RahinoDetails/>} />
            <Route path="/japan" element={<JapanHome/>} />
            <Route path="/japan-guide" element={<JapanGuide/>} />
            <Route path="/sumo-guide" element={<SumoExperience/>} />




          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
