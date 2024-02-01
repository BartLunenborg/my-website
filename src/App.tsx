// App.tsx
import "./assets/scss/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function NotFound() {
  return <div>This page is currently under construction.</div>;
};

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* Add more routes for other pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
