import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;











// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Education from "./components/Education";
// import Contactinfo from "./components/contactinfo";
// import Project from "./components/Project";



// function App() {
//   return (
//     <div className="bg-black min-h-screen">
//      <Navbar/>
//      <Home/>
//     <Education/>
//      <Project/>
//    < Contactinfo/>
//     </div>
//   );
// }



// export default App;
