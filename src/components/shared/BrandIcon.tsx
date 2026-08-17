import {
  siBehance,
  siDribbble,
  siFacebook,
  siGithub,
  siInstagram,
  siWhatsapp,
  siX,
} from "simple-icons";
import { cn } from "@/lib/utils";

/**
 * Official brand icons (GitHub, X, Instagram, Facebook, Behance, Dribbble,
 * WhatsApp) rendered from the `simple-icons` package, so they're always up
 * to date. Note: LinkedIn was removed from simple-icons for trademark
 * reasons, so its path is inlined below. Add a new brand by importing it
 * above and extending the ICONS map.
 */
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z";

const ICONS = {
  linkedin: { path: LINKEDIN_PATH },
  github: siGithub,
  x: siX,
  instagram: siInstagram,
  facebook: siFacebook,
  behance: siBehance,
  dribbble: siDribbble,
  whatsapp: siWhatsapp,
} as const;

export type BrandName = keyof typeof ICONS;

interface BrandIconProps {
  /** Must match a key in the ICONS map (see `brand` in src/data/site.ts) */
  name: string;
  className?: string;
}

export function BrandIcon({ name, className }: BrandIconProps) {
  const icon = ICONS[name as BrandName];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  );
}
