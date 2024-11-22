import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Socials from "./pages/socials";
import Info from "./components/info";

function App() {
  return (
    <div className="App relative lg:mx-64 md:mx-24">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/socials" element={<Socials />} />
        </Route>
      </Routes>
      <Info />
    </div>
  );
}

export default App;
