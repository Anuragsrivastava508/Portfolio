
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Contactinfo from "./components/contactinfo";
import Project from "./components/Project";



function App() {
  return (
    <div className="bg-black min-h-screen">
     <Navbar/>
     <Home/>
    <Education/>
     <Project/>
   < Contactinfo/>
    </div>
  );
}



export default App;

