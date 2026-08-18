"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Download,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

/* Staggered entrance for the hero content */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/* 🏅 Credential badge icons — keys come from
 *    src/data/site.ts → about.credentials */
const CREDENTIAL_ICONS: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  award: Award,
};

/**
 * Hero — name, title, intro and the three CTAs (View Resume,
 * Download Resume, Contact Me). Edit the copy in src/data/site.ts.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-22%] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.16),transparent)]" />
        <div className="absolute bottom-[-28%] right-[-12%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(38,51,84,0.55),transparent)]" />
        <div className="absolute bottom-[-30%] left-[-14%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.07),transparent)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x relative flex flex-col items-center pb-28 pt-36 text-center md:pb-32 md:pt-44"
      >
        {/* Availability + credential badges */}
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2">
            <span aria-hidden="true" className="animate-pulse-dot h-2 w-2 rounded-full bg-gold-500" />
            <span className="eyebrow">{siteConfig.availability}</span>
          </span>

          {/* 🏅 Credentials — edit in src/data/site.ts → about.credentials */}
          {siteConfig.about.credentials.map((credential) => {
            const Icon = CREDENTIAL_ICONS[credential.icon] ?? ShieldCheck;
            return (
              <span
                key={credential.label}
                title={credential.note}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors duration-200 hover:border-gold-500/40"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist-300">
                  {credential.label}
                </span>
              </span>
            );
          })}
        </motion.div>

        {/* Name — responsive clamp keeps it inside the screen on small phones */}
        <motion.h1
          variants={item}
          className="break-words font-display text-[clamp(2rem,9.5vw,2.9rem)] leading-[1.08] text-mist-100 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {siteConfig.firstName}
          <br />
          <em className="text-gold-gradient not-italic">{siteConfig.lastName}</em>
        </motion.h1>

        {/* Title / tagline */}
        <motion.p
          variants={item}
          className="mt-7 text-lg font-medium text-mist-200 md:text-xl"
        >
          {siteConfig.title}
        </motion.p>

        {/* Short introduction */}
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base leading-relaxed text-mist-400 md:text-lg"
        >
          {siteConfig.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* 1 · View resume in the browser (opens the PDF in a new tab) */}
          <Button
            href={siteConfig.resume.path}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            icon={<FileText className="h-4 w-4" />}
          >
            View Resume
          </Button>

          {/* 2 · Download the resume PDF */}
          <Button
            href={siteConfig.resume.path}
            download={siteConfig.resume.fileName}
            variant="outline"
            size="lg"
            icon={<Download className="h-4 w-4" />}
          >
            Download Resume
          </Button>

          {/* 3 · Jump to the contact form */}
          <Button href="#contact" variant="ghost" size="lg" iconRight={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}>
            Contact Me
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={item}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-y-8 sm:grid-cols-4"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 px-4 text-center first:border-l-0 sm:border-l sm:border-white/[0.06]">
              <dd className="text-gold-gradient font-mono text-3xl md:text-4xl">{stat.value}</dd>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-500">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-mist-500 transition-colors hover:text-gold-400"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
