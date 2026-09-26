export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-sm py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-white text-lg">IONFIT</p>
        <nav className="flex gap-6">
          <a href="/privacidad" className="hover:text-white transition">Política de privacidad</a>
          <a href="/terminos" className="hover:text-white transition">Términos y condiciones</a>
          <a href="/tratamiento-datos" className="hover:text-white transition">Tratamiento de datos</a>
        </nav>
        <p>© {new Date().getFullYear()} IONFIT. Todos los derechos reservados.</p>
      </div>
      <p className="text-center text-xs mt-4 opacity-40">
        Landing creada por <strong>Elite Esco</strong>
      </p>
    </footer>
  );
}
