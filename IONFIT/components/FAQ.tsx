"use client";
import { useState } from "react";

const preguntas = [
  {
    q: "¿Los suplementos tienen registro INVIMA?",
    a: "Sí. Todos nuestros productos cuentan con registro sanitario INVIMA vigente y son fabricados bajo normas BPM.",
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "Aceptamos tarjeta crédito/débito, PSE, Nequi y Bancolombia QR a través de Wompi, plataforma respaldada por Bancolombia.",
  },
  {
    q: "¿Hacen envíos a todo Colombia?",
    a: "Sí. Despachamos a todo el territorio nacional. El tiempo de entrega es 24–72 horas en ciudades principales y hasta 5 días en municipios.",
  },
  {
    q: "¿Qué pasa si no veo resultados?",
    a: "Ofrecemos garantía de satisfacción de 15 días. Si seguiste el plan y no ves cambios, te devolvemos el dinero.",
  },
  {
    q: "¿El plan nutricional es personalizado?",
    a: "Sí. Al adquirir el plan Performance o Elite, un nutricionista certificado te contacta en menos de 24 horas para diseñar tu plan.",
  },
];

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-brand-dark">
      <h2 className="text-3xl font-bold text-center mb-16">
        Preguntas <span className="text-brand-primary">frecuentes</span>
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {preguntas.map((p, i) => (
          <div key={i} className="bg-white/5 rounded-xl overflow-hidden">
            <button
              onClick={() => setAbierto(abierto === i ? null : i)}
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
            >
              {p.q}
              <span className="text-brand-primary">{abierto === i ? "−" : "+"}</span>
            </button>
            {abierto === i && (
              <p className="px-6 pb-5 text-gray-400 text-sm">{p.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
