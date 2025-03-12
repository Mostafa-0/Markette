function Button({ type, onClick, className, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} px-6 py-2 text-sm font-medium text-white bg-black tracking-wide shadow-lg rounded-md hover:bg-neutral-800 transition`}
    >
      {children}
    </button>
  );
}

export default Button;
