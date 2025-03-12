import cart from "../assets/cart.png";
function Hero() {
  return (
    <header className="hero min-h-[82vh] flex gap-8 flex-col lg:flex-row justify-center lg:justify-around items-center text-black">
      <div className="lg:order-2 bg-gradient-to-br from-red-600 to-orange-600 rounded-full shadow-xl">
        <div></div>
        <img src={cart} alt="" className="w-full max-w-[280px]" />
      </div>
      <div>
        <h1 className="text-[16vw] sm:text-8xl lg:text-[8rem] font-black tracking-wide leading-none">
          Marke
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-600">
            tt
          </span>
          e
        </h1>
        <p className="tracking-wide lg:ml-2 text-neutral-800">
          Discover the perfect blend of style and convenience at your
          fingertips.
        </p>
      </div>
    </header>
  );
}

export default Hero;
