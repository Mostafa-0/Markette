import Navbar from "./navbar";
import Hero from "./hero";

function Header() {
  return (
    <header className="h-dvh flex flex-col text-white">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
