"use client";

import { BadgeCheck, Download, Eye, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";

/* Dummy text lines used to sketch the resume preview inside the card */
const FAUX_LINES = [
  { section: true },
  { width: "100%" },
  { width: "92%" },
  { width: "78%" },
  { section: true },
  { width: "88%" },
  { width: "95%" },
  { width: "70%" },
  { section: true },
  { width: "85%" },
  { width: "60%" },
];

/**
 * Resume — premium card with a stylised document preview plus
 * "View" and "Download" buttons.
 *
 * 📄 TO USE YOUR OWN RESUME:
 *    Drop your PDF at /public/resume.pdf (path is set in src/data/site.ts →
 *    resume.path). The buttons below use that path automatically.
 */
export function Resume() {
  return (
    <section id="resume" className="section bg-ink-900/30">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,169,106,0.07),transparent)]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          index="02"
          eyebrow="Resume"
          title={
            <>
              Experience,{" "}
              <em className="text-gold-gradient not-italic">On Paper</em>
            </>
          }
          description={siteConfig.resumeSection.description}
        />

        {/* Premium resume card */}
        <Reveal>
          <div className="glass corners relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-8 md:p-12">
            {/* Gold keyline on top of the card */}
            <div aria-hidden="true" className="hairline absolute inset-x-10 top-0" />

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
              {/* Faux document preview */}
              <div className="relative mx-auto w-full max-w-[290px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 -inset-y-8 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(189,148,80,0.16),transparent)] blur-2xl"
                />
                <div className="group relative -rotate-3 rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:rotate-0">
                  {/* Document header */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-gold-400 to-gold-600 font-display text-xs font-bold text-ink-950">
                      {siteConfig.initials}
                    </span>
                    <div className="space-y-1.5">
                      <div className="h-2 w-28 rounded-full bg-mist-100/80" />
                      <div className="h-1.5 w-20 rounded-full bg-gold-500/70" />
                    </div>
                  </div>
                  <div className="hairline my-5" />

                  {/* Faux body lines */}
                  <div className="space-y-3">
                    {FAUX_LINES.map((line, i) =>
                      line.section ? (
                        <div key={i} className="h-1.5 w-14 rounded-full bg-gold-500/60" />
                      ) : (
                        <div
                          key={i}
                          className="h-2 rounded-full bg-white/10"
                          style={{ width: line.width }}
                        />
                      ),
                    )}
                  </div>

                  {/* PDF badge */}
                  <span className="absolute bottom-4 right-4 rounded-md bg-gradient-to-b from-gold-400 to-gold-600 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-950">
                    PDF
                  </span>
                </div>
              </div>

              {/* Copy + actions */}
              <div>
                <h3 className="font-display text-2xl text-mist-100 md:text-3xl">
                  A complete career record,
                  <br />
                  <span className="text-gold-300">ready to share.</span>
                </h3>

                <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                  {siteConfig.resumeSection.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm text-mist-300">
                      <BadgeCheck className="h-4.5 w-4.5 shrink-0 text-gold-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
                  {/* Opens the PDF in a new browser tab */}
                  <Button
                    href={siteConfig.resume.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    icon={<Eye className="h-4 w-4" />}
                  >
                    View Resume
                  </Button>

                  {/* Downloads the PDF */}
                  <Button
                    href={siteConfig.resume.path}
                    download={siteConfig.resume.fileName}
                    variant="outline"
                    icon={<Download className="h-4 w-4" />}
                  >
                    Download Resume
                  </Button>
                </div>

                <p className="mt-6 flex items-center gap-2 text-xs text-mist-500">
                  <FileText className="h-3.5 w-3.5 text-gold-500/80" />
                  PDF · {siteConfig.resume.pages} · Updated {siteConfig.resume.updated} · served
                  from /public/resume.pdf
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
