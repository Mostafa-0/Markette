import Featured from "./featured";
import Header from "./header";
import Products from "./products";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Featured />
        <hr className="mb-8 m-auto max-w-[60%]"/>
        <Products />
      </main>
    </>
  );
}

export default Home;
