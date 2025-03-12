import Featured from "../components/products/Featured";
import Hero from "../components/Hero";
import Products from "../components/products/Products";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Featured />
        <Products />
      </main>
    </>
  );
}

export default Home;
