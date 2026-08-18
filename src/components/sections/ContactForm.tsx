"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent";
interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  send?: string;
}

const INPUT_CLASSES =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-mist-100 placeholder:text-mist-500 outline-none transition focus:border-gold-400/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-gold-500/15";

/**
 * Contact form with client-side validation (name, email, message).
 *
 * 📮 HOW SUBMISSIONS REACH YOU — three modes set in src/data/site.ts →
 *    contact.formMode / formEndpoint:
 *    · "mailto"   → opens the visitor's email app pre-filled to your
 *                   address (current setup — zero configuration)
 *    · "endpoint" → POSTs to formEndpoint (e.g. a free formspree.io form)
 *    · "demo"     → simulates a successful send (UI preview only)
 */
export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const isMailto =
    !siteConfig.contact.formEndpoint && siteConfig.contact.formMode === "mailto";

  /* --- validation ----------------------------------------------------- */
  function validate(): boolean {
    const next: FieldErrors = {};
    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "That email address doesn't look right.";
    }
    if (!values.message.trim()) {
      next.message = "Please write a message.";
    } else if (values.message.trim().length < 10) {
      next.message = "Your message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    /* Clear the field's error as soon as the user starts fixing it */
    setErrors((e) => ({ ...e, [field]: undefined, send: undefined }));
  }

  /* --- submit ---------------------------------------------------------- */
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      if (siteConfig.contact.formEndpoint) {
        /* → Endpoint mode: POST to Formspree / EmailJS / your own API */
        const response = await fetch(siteConfig.contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Send failed");
      } else if (siteConfig.contact.formMode === "mailto") {
        /* → Mailto mode: open the visitor's email app, pre-filled */
        const subject = encodeURIComponent(
          `New message from ${values.name} — portfolio contact form`,
        );
        const body = encodeURIComponent(
          `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
        );
        window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
        await new Promise((resolve) => setTimeout(resolve, 350));
      } else {
        /* → Demo mode: simulate a successful send */
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ send: "Something went wrong — please email me directly instead." });
    }
  }

  function reset() {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  return (
    <div className="glass corners relative overflow-hidden rounded-[2rem] p-7 md:p-9">
      <div aria-hidden="true" className="hairline absolute inset-x-10 top-0" />

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          /* ------------------------- success ------------------------- */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center justify-center py-14 text-center"
            role="status"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
              <CheckCircle2 className="h-7 w-7 text-gold-400" />
            </span>
            <h3 className="mt-5 font-display text-2xl text-mist-100">Message sent</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist-400">
              {isMailto
                ? "Almost done! Your email app should have opened with everything pre-filled — just press send there, and I'll get back to you within 24 hours."
                : "Thank you for reaching out — I'll get back to you within 24 hours."}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          /* --------------------------- form -------------------------- */
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="eyebrow">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={cn(INPUT_CLASSES, errors.name && "border-red-400/60")}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="eyebrow">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={cn(INPUT_CLASSES, errors.email && "border-red-400/60")}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="eyebrow">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, role, or idea…"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={cn(INPUT_CLASSES, "resize-none", errors.message && "border-red-400/60")}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Honeypot — invisible to humans, catches naive spam bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {errors.send && (
              <p className="text-sm text-red-400" role="alert">
                {errors.send}
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
              icon={
                status === "submitting" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )
              }
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
