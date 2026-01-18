
import * as React from "react";

export function EmailTemplate({ email, message }: { email: string; message: string }) {
  return (
    <div>
      <h2>New Contact Form Submission</h2>
      <p>
        <strong>From:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
