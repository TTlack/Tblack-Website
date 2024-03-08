import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Project from "./features/project/Project";
import Blog from "./features/blog/Blog";
import Contact from "./features/contact/Contact";
import PageNotFound from "./ui/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
