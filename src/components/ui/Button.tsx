"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "group inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  /* Gold pill — main calls to action */
  primary:
    "bg-gradient-to-b from-gold-400 to-gold-600 text-ink-950 shadow-[0_12px_32px_-12px_rgba(201,169,106,0.6)] hover:from-gold-300 hover:to-gold-500",
  /* Hairline outline — secondary actions */
  outline:
    "border border-white/15 text-mist-100 hover:border-gold-400/60 hover:text-gold-300",
  /* Quiet text link — tertiary actions */
  ghost: "text-mist-300 hover:text-gold-300",
};

const SIZES: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-3.5 text-[15px]",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  /** Optional leading icon */
  icon?: ReactNode;
  /** Optional trailing icon */
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = ButtonBaseProps & ComponentPropsWithoutRef<"a">;
type ButtonAsButton = ButtonBaseProps & ComponentPropsWithoutRef<"button">;

/**
 * Polymorphic button: pass `href` to render a link (e.g. href="/resume.pdf"),
 * otherwise a <button> is rendered. Both get a subtle press animation.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", icon, iconRight, children, className, ...rest } = props;
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if ("href" in rest && rest.href != null) {
    return (
      <motion.a
        {...(rest as ComponentPropsWithoutRef<typeof motion.a>)}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...(rest as ComponentPropsWithoutRef<typeof motion.button>)}
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
