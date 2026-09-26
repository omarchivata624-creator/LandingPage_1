import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-event-checksum") ?? "";

  // Validar firma del webhook Wompi
  const secret = process.env.WOMPI_EVENTS_SECRET ?? "";
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (expected !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === "transaction.updated" && event.data?.transaction?.status === "APPROVED") {
    // TODO: marcar orden como pagada en base de datos / enviar email de confirmación
    console.log("Pago aprobado:", event.data.transaction.id);
  }

  return NextResponse.json({ received: true });
}
