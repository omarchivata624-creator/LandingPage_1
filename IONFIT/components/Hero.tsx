"use client";
import { motion } from "framer-motion";
import BotonPago from "./checkout/BotonPago";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-black to-brand-dark">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black leading-tight mb-6"
      >
        Alimenta tu <span className="text-brand-primary">rendimiento</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 max-w-xl mb-10"
      >
        Suplementos y planes nutricionales formulados con ciencia para atletas
        que exigen resultados reales. 100% hecho en Colombia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <BotonPago label="Quiero mi plan ahora" />
      </motion.div>
    </section>
  );
}
