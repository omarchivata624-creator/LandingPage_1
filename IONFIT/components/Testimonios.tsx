const testimonios = [
  {
    nombre: "Camila R.",
    ciudad: "Bogotá",
    texto: "En 3 meses bajé 8 kg manteniendo músculo. El plan nutricional de IONFIT fue clave.",
    estrellas: 5,
  },
  {
    nombre: "Sebastián M.",
    ciudad: "Medellín",
    texto: "Los suplementos son de calidad real. Nada de rellenos baratos. Mi rendimiento mejoró notablemente.",
    estrellas: 5,
  },
  {
    nombre: "Laura P.",
    ciudad: "Cali",
    texto: "La nutricionista me personalizó todo según mi tipo de entrenamiento. Muy profesional.",
    estrellas: 5,
  },
];

export default function Testimonios() {
  return (
    <section className="py-24 px-6 bg-brand-dark">
      <h2 className="text-3xl font-bold text-center mb-16">
        Lo que dicen nuestros <span className="text-brand-primary">atletas</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonios.map((t) => (
          <div key={t.nombre} className="bg-white/5 rounded-2xl p-6">
            <p className="text-yellow-400 text-sm mb-3">{"★".repeat(t.estrellas)}</p>
            <p className="text-gray-300 text-sm italic mb-4">"{t.texto}"</p>
            <p className="font-semibold">{t.nombre}</p>
            <p className="text-gray-500 text-xs">{t.ciudad}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
