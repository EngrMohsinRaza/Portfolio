"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BrandIcon } from "@/components/shared/BrandIcon";

/**
 * Social links — a grid of platform cards. Edit the links in ONE place:
 * src/data/site.ts → socials. Set a platform's `url` to "" to hide it.
 */
export function SocialLinks() {
  const visibleSocials = siteConfig.socials.filter((social) => social.url);

  return (
    <section id="connect" className="section">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Connect"
          title={
            <>
              Find Me <em className="text-gold-gradient not-italic">Online</em>
            </>
          }
          description={siteConfig.connectSection.description}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSocials.map((social, i) => (
            <Reveal key={social.id} delay={0.06 * i} className="h-full">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile (opens in a new tab)`}
                className="group glass flex h-full items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/35 hover:bg-white/[0.05]"
              >
                {/* Icon */}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500/20">
                  <BrandIcon name={social.brand} className="h-5 w-5" />
                </span>

                {/* Name + handle */}
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-mist-100">
                    {social.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-mist-500">
                    {social.handle}
                  </span>
                </span>

                {/* Arrow appears / slides on hover */}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-mist-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
              </a>
            </Reveal>
          ))}

          {/* Email tile — always available as a fallback channel */}
          <Reveal delay={0.06 * visibleSocials.length} className="h-full">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label={`Email me at ${siteConfig.contact.email}`}
              className="group glass flex h-full items-center gap-4 rounded-2xl border-dashed p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:bg-white/[0.05]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-all duration-300 group-hover:scale-110">
                <ArrowRight className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-mist-100">Email</span>
                <span className="mt-0.5 block truncate text-xs text-mist-500">
                  {siteConfig.contact.email}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-mist-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
