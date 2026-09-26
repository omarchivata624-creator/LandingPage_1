import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const LeadSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = LeadSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { nombre, email, telefono } = result.data;

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "noreply@ionfit.co",
    to: process.env.EMAIL_TO ?? "ventas@ionfit.co",
    subject: `Nuevo lead IONFIT: ${nombre}`,
    html: `<p><strong>Nombre:</strong> ${nombre}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Teléfono:</strong> ${telefono ?? "No indicado"}</p>`,
  });

  return NextResponse.json({ ok: true });
}
