import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to={"/"} className="w-fit">
      <div className={`${className} font-black tracking-wide`}>
        Marke
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          tt
        </span>
        e
      </div>
    </Link>
  );
}

export default Logo;
