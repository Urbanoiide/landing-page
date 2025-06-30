export default function Footer() {
  return (
    <footer className="bg-[#007cc3] py-4">
      <div className="max-w-7xl mx-auto px-4 text-white text-center text-sm flex flex-col md:flex-row items-center justify-center gap-2">
        <span>© Derechos reservados.</span>
        <span className="hidden md:inline">/</span>
        <a href="#" className="font-semibold underline decoration-dotted hover:opacity-90">
          Términos y condiciones
        </a>
        <span className="hidden md:inline">/</span>
        <a href="#" className="font-semibold underline decoration-dotted hover:opacity-90">
          Política de privacidad
        </a>
      </div>
    </footer>
  );
}