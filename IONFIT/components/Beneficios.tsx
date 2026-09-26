const beneficios = [
  {
    icon: "🧬",
    titulo: "Formulación científica",
    descripcion: "Cada producto está respaldado por investigación nutricional actualizada.",
  },
  {
    icon: "🇨🇴",
    titulo: "Fabricado en Colombia",
    descripcion: "Producción local con estándares internacionales de calidad.",
  },
  {
    icon: "📦",
    titulo: "Envío a todo el país",
    descripcion: "Despacho en 24–72 horas a cualquier ciudad de Colombia.",
  },
  {
    icon: "🎯",
    titulo: "Plan personalizado",
    descripcion: "Nutricionista asignado para adaptar el plan a tus metas.",
  },
];

export default function Beneficios() {
  return (
    <section className="py-24 px-6 bg-brand-dark">
      <h2 className="text-3xl font-bold text-center mb-16">
        ¿Por qué <span className="text-brand-primary">IONFIT</span>?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {beneficios.map((b) => (
          <div key={b.titulo} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition">
            <span className="text-4xl">{b.icon}</span>
            <h3 className="text-lg font-semibold mt-4 mb-2">{b.titulo}</h3>
            <p className="text-gray-400 text-sm">{b.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
