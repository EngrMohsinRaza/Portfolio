import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { BrandIcon } from "@/components/shared/BrandIcon";

/**
 * Footer — brand, quick navigation, social icons, copyright and a
 * back-to-top link. Everything is driven by src/data/site.ts.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocials = siteConfig.socials.filter((s) => s.url);

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-900/40">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5" aria-label={`${siteConfig.name} — back to top`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10 font-display text-sm font-semibold text-gold-300">
                {siteConfig.initials}
              </span>
              <span className="font-display text-lg text-mist-100">
                {siteConfig.name}
                <span className="text-gold-500">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-500 md:mx-0 mx-auto">
              {siteConfig.title}. Crafted with care in Dammam, Saudi Arabia.
            </p>
          </div>

          {/* Quick navigation */}
          <nav aria-label="Footer" className="text-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-mist-400 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 md:justify-end">
            {visibleSocials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
              >
                <BrandIcon name={social.brand} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 text-xs text-mist-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-medium text-mist-400 transition-colors hover:text-gold-300"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-gold-400/60">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
