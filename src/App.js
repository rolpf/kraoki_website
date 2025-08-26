import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Bingo from "./pages/bingo.jsx";
import Socials from "./pages/socials.jsx";
import Stamps from "./components/stamps.jsx";
import Info from "./components/info.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <div className="text-center flex flex-col justify-between min-h-screen lg:mx-64 md:mx-24">
        <Navbar />

        <div className="md:flex md:flex-row-reverse">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
          <div>
            <Info />
          </div>
        </div>
        <Stamps />
        <footer className="w-full text-center bottom-0">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
