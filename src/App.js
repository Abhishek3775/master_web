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
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Services from './pages/serviice/Services';
import ExpenditionCruising from './pages/ServiceExpendition/ExpenditionCruising';
import ImperialOdysseyHome from './pages/Japan-Quarter/ImperialOdysseyHome';
import PrivateAviation from './pages/ServicePrivantAviation/PrivateAviation';
import About from './pages/About/About';


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
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Contact />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />
            <Route path="/blog" element={<Blog />} />
            {/* Add more routes as needed */}

            {/* routes for the south africa home */}
            <Route path="/south-africa" element={<SouthAfrica />} />
            <Route path="/south-africa/rhino-tracking" element={<RahinoDetails />} />
            <Route path="/japan" element={<JapanHome />} />
            <Route path="/japan-guide" element={<JapanGuide />} />
            <Route path="/sumo-guide" element={<SumoExperience />} />

            {/* routes for the  services */}
            <Route path="/services" element={<Services/>} />
            <Route path="/private-aviation" element={<PrivateAviation/>} />
            <Route path="/cruises" element={<ExpenditionCruising/>} />

            {/* routes for the  japan */}
            <Route path="/imperial-odyssey" element={<ImperialOdysseyHome/>} />
            <Route path="/about" element={<About/>} />



          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
