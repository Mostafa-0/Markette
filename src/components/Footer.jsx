import Logo from "./ui/Logo";

function Footer() {
  return (
    <footer className="grid gap-5 border-t mt-8 py-6">
      <Logo className="text-[7vw] sm:text-5xl" />
      <p className="text-xs">&copy; 2024 Markette. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
