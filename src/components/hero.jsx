function Hero() {
  return (
    <section className="hero my-auto flex flex-col justify-center gap-4">
      <h1 className="text-[18vw] sm:text-9xl font-bold tracking-wide">
        Marke<span className="colored-letters text-black animate-[pulse_1.6s_ease-in-out]">tt</span>e
      </h1>
      <p className="text-lg tracking-wide uppercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <a
        href="#shop"
        className="hero-btn relative w-fit text-lg font-semibold px-6 text-white z-10"
      >
        SHOP NOW
      </a>
    </section>
  );
}

export default Hero;
