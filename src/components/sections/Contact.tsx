"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BrandIcon } from "@/components/shared/BrandIcon";
import { ContactForm } from "@/components/sections/ContactForm";

/**
 * Contact — email, phone, WhatsApp & address cards, a validated contact
 * form, and an optional Google Maps embed.
 *
 * 🗺️ TO SHOW A LIVE MAP:
 *    Paste a Google Maps embed URL into src/data/site.ts →
 *    contact.mapEmbedUrl (get one at google.com/maps → Share → "Embed a map").
 *    Leave it "" to hide the map.
 */
export function Contact() {
  const { contact } = siteConfig;

  /* Contact methods — all URLs are defined in src/data/site.ts → contact */
  const methods = [
    {
      key: "email",
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: <Mail className="h-5 w-5" />,
    },
    {
      key: "phone",
      label: "Phone",
      value: contact.phone,
      href: contact.phoneHref,
      external: false,
      icon: <Phone className="h-5 w-5" />,
    },
    /* WhatsApp card — set contact.whatsapp to "" to hide it */
    ...(contact.whatsapp
      ? [
          {
            key: "whatsapp",
            label: "WhatsApp",
            value: contact.whatsappDisplay || `+${contact.whatsapp}`,
            href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hello ${siteConfig.firstName}, I found your portfolio website.`)}`,
            external: true,
            icon: <BrandIcon name="whatsapp" className="h-5 w-5" />,
          },
        ]
      : []),
    {
      key: "location",
      label: "Location",
      value: `${contact.address}, ${contact.addressLine2}`,
      href: contact.mapUrl,
      external: true,
      icon: <MapPin className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="section bg-ink-900/30">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[20%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.07),transparent)]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Work <em className="text-gold-gradient font-display italic">Together</em>
            </>
          }
          description={siteConfig.contactSection.description}
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Contact methods */}
          <div className="space-y-4">
            {methods.map((method, i) => (
              <Reveal key={method.key} delay={0.06 * i}>
                <a
                  href={method.href}
                  {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/35 hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-transform duration-300 group-hover:scale-110">
                    {method.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-mist-500">
                      {method.label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-medium text-mist-100 md:text-[15px]">
                      {method.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-mist-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                </a>
              </Reveal>
            ))}
          </div>

          {/* Contact form (validation + optional real email sending) */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Optional Google Maps embed (renders only when mapEmbedUrl is set) */}
        {contact.mapEmbedUrl ? (
          <Reveal className="mt-16">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <iframe
                src={contact.mapEmbedUrl}
                title={`Map showing the location of ${siteConfig.name}`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full bg-ink-900"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
