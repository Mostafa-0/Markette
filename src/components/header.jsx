import Navbar from "./navbar";
import Hero from "./hero";

function Header() {
  return (
    <header className="min-h-svh flex flex-col text-white">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
