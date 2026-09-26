export function buildWompiCheckoutUrl(params: {
  referencia: string;
  monto: number; // en centavos COP
  moneda?: string;
  redirectUrl: string;
}) {
  const { referencia, monto, moneda = "COP", redirectUrl } = params;
  const publicKey = process.env.WOMPI_PUBLIC_KEY ?? "";

  const base = "https://checkout.wompi.co/p/";
  const query = new URLSearchParams({
    "public-key": publicKey,
    currency: moneda,
    "amount-in-cents": String(monto),
    reference: referencia,
    "redirect-url": redirectUrl,
  });

  return `${base}?${query.toString()}`;
}

export function verifyWompiSignature(body: string, signature: string): boolean {
  const crypto = require("crypto");
  const secret = process.env.WOMPI_EVENTS_SECRET ?? "";
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  return expected === signature;
}
