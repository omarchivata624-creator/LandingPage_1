"use client";

interface BotonPagoProps {
  label?: string;
  variant?: "primary" | "dark";
}

export default function BotonPago({ label = "Comprar ahora", variant = "primary" }: BotonPagoProps) {
  const base = "inline-block font-bold px-8 py-4 rounded-full transition text-base cursor-pointer";
  const styles =
    variant === "primary"
      ? `${base} bg-brand-primary text-black hover:opacity-90`
      : `${base} bg-black text-white hover:bg-gray-900`;

  const handlePago = () => {
    // TODO: inicializar widget Wompi con los datos del producto seleccionado
    // Referencia: https://docs.wompi.co/docs/en/widget-checkout-web
    console.log("Iniciar pago Wompi");
  };

  return (
    <button onClick={handlePago} className={styles}>
      {label}
    </button>
  );
}
