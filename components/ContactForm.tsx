"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();

const contactText = {
  send: "Send Message",
  sending: "Sending...",
  success: "Your message has been submitted successfully.",
  failed: "Message could not be sent. Please try again later.",
  validation: "Please complete all fields. Message must be at least 10 characters.",
  name: "Your Name",
  email: "Your Email",
  subject: "Subject",
  message: "Your Message",
  urgent: "For urgent inquiries, please submit the form and our team will review your message."
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      _cc: "namesgs@gmail.com, daiquni@gmail.com"
    };

    if (!payload.name || !payload.email || !payload.subject || payload.message.length < 10) {
      setStatus("error");
      setMessage(contactText.validation);
      return;
    }

    if (!formEndpoint) {
      console.info("Form endpoint is not configured.");
      setStatus("error");
      setMessage(contactText.failed);
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
      setMessage(contactText.success);
    } catch {
      setStatus("error");
      setMessage(contactText.failed);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          {contactText.name}
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          {contactText.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        {contactText.subject}
        <input name="subject" type="text" required />
      </label>
      <label>
        {contactText.message}
        <textarea name="message" rows={6} required minLength={10} />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? contactText.sending : contactText.send}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
      <p className="direct-mail">{contactText.urgent}</p>
    </form>
  );
}
