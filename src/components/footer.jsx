import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-50 mt-8 p-4 py-6 sm:px-12">
      <Link to={"/"}>
        <h2 className="text-[7vw] sm:text-4xl font-bold tracking-wide mb-2">
          Marke<span className="colored-letters">tt</span>e
        </h2>
      </Link>
      <p className="text-sm">
        Copyright &copy; Markette 2024. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
