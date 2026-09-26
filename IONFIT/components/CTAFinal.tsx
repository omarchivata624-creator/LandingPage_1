import BotonPago from "./checkout/BotonPago";

export default function CTAFinal() {
  return (
    <section className="py-24 px-6 bg-brand-primary text-black text-center">
      <h2 className="text-4xl font-black mb-4">
        Tu transformación empieza hoy
      </h2>
      <p className="text-lg mb-10 max-w-md mx-auto opacity-80">
        Más de 2.000 atletas colombianos ya confían en IONFIT. Únete ahora y siente la diferencia.
      </p>
      <BotonPago label="Empezar ahora" variant="dark" />
    </section>
  );
}
