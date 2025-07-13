import { Resend } from "resend";
import { EmailTemplate } from "@/components/Email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const response = await resend.emails.send({
      from: "Steven <onboarding@resend.dev>",
      to: "stevencg.0319@gmail.com",
      subject: "New message from portfolio",
      react: EmailTemplate({
        firstName: data.username,
        message: data.message,
        email: data.email,
      }),
    });

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}