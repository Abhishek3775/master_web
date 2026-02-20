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
import Itinerary from './pages/Itinerary/Itinerary';
import About from './pages/About/About';
<<<<<<< HEAD
import Experience from './pages/Experience/Experience';
=======
import Calender from './pages/Calender/Calender';
import MarchCalender from './pages/Calender/MarchCalender';
>>>>>>> 5bcff50548bf19d8e6e6093cc9cd0d2e0b8c0b9a



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

            {/* routes for the  imperial-odyssey */}
            <Route path="/imperial-odyssey" element={<ImperialOdysseyHome/>} />

            {/* routes for the  itinerary */}
            <Route path="/itinerary" element={<Itinerary/>} />

            {/* routes for the  about */}
            <Route path="/about" element={<About/>} />
<<<<<<< HEAD

            {/* routes for the  about */}
            <Route path="/experience" element={<Experience/>} />

=======
            <Route path="/calender" element={<Calender/>} />
            <Route path="/calender/march" element={<MarchCalender/>} />
>>>>>>> 5bcff50548bf19d8e6e6093cc9cd0d2e0b8c0b9a
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
