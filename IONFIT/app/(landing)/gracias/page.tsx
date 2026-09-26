export default function GraciasPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">
        ¡Gracias por tu compra!
      </h1>
      <p className="text-lg text-gray-300 max-w-md">
        Recibirás un correo con los detalles de tu pedido. En 24–48 horas
        nuestro equipo se pondrá en contacto contigo.
      </p>
      <a
        href="/"
        className="mt-8 inline-block bg-brand-primary text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
      >
        Volver al inicio
      </a>
    </main>
  );
}
