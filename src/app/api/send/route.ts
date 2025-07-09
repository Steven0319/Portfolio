import { Resend } from "resend";
import { EmailTemplate } from "@/components/Email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    try {
      const response = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["steven.0319@gmail.com"],
        subject: "New message from Steven landing page",
        react: EmailTemplate({
          firstName: formData.username,
          message: formData.message,
          email: formData.email,
        }),
        text: "New message from landing page",
      });

      return Response.json(response);
    } catch (error) {
      return Response.json({ error: "Failed to send email", details: error });
    }

  } catch (error) {
    return Response.json({ error: "Invalid request body", details: error });
  }
}
