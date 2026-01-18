import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
function App() {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => e.preventDefault());  // Right click disabled
  // }, []);
  // useEffect(() => {
  //   const blockKeys = (e) => {
  //     if (e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
  //       e.preventDefault();
  //       console.log('Ctrl+Shift+C blocked'); // Ctrl+Shift+C
  //     }
  //     if (e.keyCode === 123 || // F12
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
  //       (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener('keydown', blockKeys);
  //   return () => document.removeEventListener('keydown', blockKeys);
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
