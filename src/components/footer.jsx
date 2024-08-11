import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t mt-8 p-4 py-6 sm:px-12">
      <Link to={"/"}>
        <h2 className="text-[7vw] sm:text-4xl font-bold tracking-wide mb-2">
          Marke
          <span className="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
            tt
          </span>
          e
        </h2>
      </Link>
      <p className="text-sm">
        &copy; 2024 Markette. All rights reserved. By Mostafa Hashem
      </p>
    </footer>
  );
}

export default Footer;
