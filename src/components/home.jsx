import Featured from "./featured";
import Header from "./header";
import Products from "./products";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Featured />
        <Products />
      </main>
    </>
  );
}

export default Home;
