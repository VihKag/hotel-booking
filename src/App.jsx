import React, { Suspense,useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Booking from './pages/Booking'
import News from './pages/News'
import Branch from './pages/Branch'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
//import Meta from './seo/Meta'
import "./App.css";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import CSS của AOS
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian animation (ms)
      once: true, // Chỉ chạy 1 lần khi scroll vào
      offset: 100, // Khoảng cách để kích hoạt animation
    });
  }, []);
  return (
    <>
      <div className="w-screen max-w-none overflow-x-hidden container bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* <Meta /> */}
        <main className="flex-1 min-h-screen w-full bg-white">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotels/:city/:slug" element={<Hotels />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/branch/:branchId" element={<Branch />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/career" element={<Careers />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
