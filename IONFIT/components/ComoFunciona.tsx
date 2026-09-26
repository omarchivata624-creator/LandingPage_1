const pasos = [
  { numero: "01", titulo: "Elige tu plan", desc: "Selecciona el paquete que se ajusta a tus metas deportivas." },
  { numero: "02", titulo: "Paga seguro", desc: "Procesamos tu pago con Wompi — PSE, tarjeta o Nequi." },
  { numero: "03", titulo: "Recibe tu kit", desc: "Enviamos tus suplementos a domicilio en todo Colombia." },
  { numero: "04", titulo: "Sigue tu plan", desc: "Tu nutricionista te acompaña durante todo el proceso." },
];

export default function ComoFunciona() {
  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-16">
        Cómo <span className="text-brand-primary">funciona</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {pasos.map((p) => (
          <div key={p.numero} className="flex-1 text-center">
            <span className="text-6xl font-black text-brand-primary opacity-30">{p.numero}</span>
            <h3 className="text-xl font-bold mt-2 mb-2">{p.titulo}</h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
