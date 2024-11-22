import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-dark bg-[url('../public/dither-bg.png')] h-20 content-center">
        <p className="kraoki-title">Kraoki</p>
      </div>
      <nav
        className="flex flex-wrap
          items-center
          justify-center
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-dark"
      >
        <Link className="md:px-8 px-2 block text-base" to="/">
          Accueil
        </Link>
        <Link className="md:px-8 px-2 block text-base" to="/about">
          A propos
        </Link>
        <Link className="md:px-8 px-2 block text-base" to="/socials">
          Réseaux sociaux
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;
