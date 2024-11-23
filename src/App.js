import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Socials from "./pages/socials";
import Info from "./components/info";
import Footer from "./components/footer";

function App() {
  return (
    <div className="text-center flex flex-col justify-between min-h-screen lg:mx-64 md:mx-24">
      <Navbar />

      <div className="md:flex md:flex-row-reverse justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
        <div>
          <Info />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
