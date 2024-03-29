// App.tsx
import "./assets/scss/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/contact/" element={<Contact />} />
          {/* Add more routes for other pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
