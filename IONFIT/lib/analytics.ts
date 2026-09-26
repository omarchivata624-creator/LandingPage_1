export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, params);
  }

  // Meta Pixel
  if (typeof (window as any).fbq === "function") {
    (window as any).fbq("track", eventName, params);
  }
}

export const EVENTS = {
  INICIO_PAGO: "InitiateCheckout",
  PAGO_COMPLETADO: "Purchase",
  LEAD_CAPTURADO: "Lead",
} as const;
