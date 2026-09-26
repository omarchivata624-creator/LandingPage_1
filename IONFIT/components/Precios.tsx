import BotonPago from "./checkout/BotonPago";

const planes = [
  {
    nombre: "Starter",
    precio: "149.000",
    descripcion: "Ideal para comenzar",
    incluye: ["Kit básico de suplementos", "Plan nutricional 4 semanas", "Soporte por WhatsApp"],
    destacado: false,
  },
  {
    nombre: "Performance",
    precio: "289.000",
    descripcion: "El más popular",
    incluye: [
      "Kit completo de suplementos",
      "Plan nutricional 8 semanas",
      "Seguimiento semanal",
      "Nutricionista asignado",
    ],
    destacado: true,
  },
  {
    nombre: "Elite",
    precio: "449.000",
    descripcion: "Para atletas serios",
    incluye: [
      "Kit premium de suplementos",
      "Plan nutricional 12 semanas",
      "Seguimiento diario",
      "Análisis de composición corporal",
      "Acceso a comunidad privada",
    ],
    destacado: false,
  },
];

export default function Precios() {
  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-4">
        Elige tu <span className="text-brand-primary">plan</span>
      </h2>
      <p className="text-center text-gray-400 mb-16">Precios en COP. Pago único, sin suscripciones.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {planes.map((p) => (
          <div
            key={p.nombre}
            className={`rounded-2xl p-8 flex flex-col ${
              p.destacado
                ? "bg-brand-primary text-black ring-4 ring-brand-primary scale-105"
                : "bg-white/5 text-white"
            }`}
          >
            <h3 className="text-2xl font-black mb-1">{p.nombre}</h3>
            <p className={`text-sm mb-4 ${p.destacado ? "text-black/70" : "text-gray-400"}`}>
              {p.descripcion}
            </p>
            <p className="text-4xl font-black mb-6">
              ${p.precio} <span className="text-sm font-normal">COP</span>
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {p.incluye.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span>✓</span> {item}
                </li>
              ))}
            </ul>
            <BotonPago
              label="Quiero este plan"
              variant={p.destacado ? "dark" : "primary"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
