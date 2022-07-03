import Footer from "./components/Footer";
import Navtop from "./components/Navtop";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Events from "./pages/events/Events";
import Projects from "./pages/projects/Projects";
import Donate from "./pages/donate/Donate";
import Notfound from "./components/Notfound";


function App() {
  return (
  <BrowserRouter>
      <Navtop/>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events" element={<Events />} />
          <Route path="projects" element={<Projects />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
      <Footer /> 
  </BrowserRouter>
      
  );
}

export default App;
