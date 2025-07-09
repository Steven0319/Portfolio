import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
}) => (
  <div
    style={{
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: "2rem",
      backgroundColor: "#f9fafb",
      color: "#111827",
      maxWidth: "600px",
      margin: "auto",
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
    }}
  >
    <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#111827" }}>
      📬 New Message from Portfolio
    </h1>

    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
      <strong>Sender:</strong> {firstName}
    </p>

    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
      <strong>Email:</strong>{" "}
      <a href={`mailto:${email}`} style={{ color: "#3b82f6" }}>
        {email}
      </a>
    </p>

    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "1rem",
        borderRadius: "6px",
        marginTop: "1rem",
        whiteSpace: "pre-line",
      }}
    >
      <p style={{ margin: 0 }}>{message}</p>
    </div>

    <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#6b7280" }}>
      This email was sent from your portfolio site.
    </footer>
  </div>
);
