import Header from "./header";
import Products from "./products";

function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <h2 className="px-12">Explore Our Products</h2> */}
        <Products />
      </main>
    </>
  );
}

export default Home;
