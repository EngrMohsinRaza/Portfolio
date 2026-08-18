"use client";

import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Briefcase,
  Clock,
  Gem,
  Globe,
  Languages,
  Layers,
  MapPin,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

/* Icon lookup — keys come from src/data/site.ts
   (about.facts / about.strengths / about.credentials) */
const ICONS: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  briefcase: Briefcase,
  languages: Languages,
  globe: Globe,
  target: Target,
  "bar-chart-3": BarChart3,
  gem: Gem,
  clock: Clock,
  layers: Layers,
  "shield-check": ShieldCheck,
  award: Award,
};

/**
 * About — professional summary, background, key strengths and animated
 * skill bars. Edit all copy in src/data/site.ts → about.
 */
export function About() {
  return (
    <section id="about" className="section">
      {/* subtle ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-20%] top-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.06),transparent)]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title={
            <>
              Turning Processes Into{" "}
              <em className="text-gold-gradient font-display italic">Performance</em>
            </>
          }
        />

        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* Left — narrative */}
          <div>
            <Reveal>
              <div className="space-y-5 text-base leading-[1.85] text-mist-300 md:text-[17px]">
                {siteConfig.about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Quick facts */}
            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {siteConfig.about.facts.map((fact) => {
                  const Icon = ICONS[fact.icon] ?? MapPin;
                  return (
                    <div
                      key={fact.label}
                      className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors duration-200 hover:border-gold-500/30"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                          {fact.label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-mist-100">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </Reveal>

            {/* 🏅 Credentials — premium gold badges (edit in src/data/site.ts → about.credentials) */}
            <Reveal delay={0.18}>
              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist-500">
                  Credentials
                </p>
                <ul className="mt-3.5 flex flex-wrap gap-3">
                  {siteConfig.about.credentials.map((credential) => {
                    const Icon = ICONS[credential.icon] ?? ShieldCheck;
                    return (
                      <li
                        key={credential.label}
                        className="glass inline-flex items-center gap-3 rounded-full py-2 pl-2.5 pr-4 transition-colors duration-200 hover:border-gold-500/40"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-gold-400 to-gold-600 text-ink-950">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-gold-300">
                            {credential.label}
                          </span>
                          <span className="block text-[11px] leading-tight text-mist-400">
                            {credential.note}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right — key strengths */}
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {siteConfig.about.strengths.map((strength, i) => {
              const Icon = ICONS[strength.icon] ?? Gem;
              return (
                <Reveal key={strength.title} delay={0.08 * i}>
                  <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/35 hover:bg-white/[0.05]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-mist-100">
                      {strength.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-400">
                      {strength.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-16">
          {siteConfig.about.skills.map((group) => (
            <Reveal key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-mist-300">
                {group.title}
              </h3>
              <ul className="mt-7 space-y-6">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-mist-200">{skill.name}</span>
                      <span className="font-display text-gold-400">{skill.level}%</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                      className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
