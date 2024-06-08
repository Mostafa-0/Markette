import Navbar from "./navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="grid place-content-center min-h-[72svh]">
        <h2 className="text-3xl font-medium">Sorry!</h2>
        <p className="text-xl">
          The page you&apos;re looking for is not found.
        </p>
      </div>
    </>
  );
}

export default NotFound;
