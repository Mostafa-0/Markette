function Hero() {

  return (
    <section className="hero my-auto flex flex-col justify-center gap-4">
      <h1 className="text-[18vw] sm:text-8xl lg:text-[10rem] 2xl:text-[9vw] font-bold tracking-wide">
        Markette
      </h1>
      <p className="text-lg lg:text-2xl tracking-wide uppercase md:max-w-[80%]">
        Discover the perfect blend of style and convenience at your fingertips.
      </p>
      <button
        onClick={() => document.getElementById("featured").scrollIntoView()}
        className="show-now-btn relative w-fit text-lg font-semibold px-6 text-white z-10"
      >
        SHOP NOW!
      </button>
    </section>
  );
}

export default Hero;
