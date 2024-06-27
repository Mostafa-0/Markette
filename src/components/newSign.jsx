import scribbles from "../assets/scribbles";

function NewSign() {
  return (
    <div
      className="font-medium text-center w-48 h-32 grid place-items-center text-white absolute top-0 -left-5 -rotate-6 bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${scribbles})` }}
    >
      NEW ARRIVAL!
    </div>
  );
}

export default NewSign;
