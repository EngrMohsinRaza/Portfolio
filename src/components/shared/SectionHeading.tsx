import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small index shown in the eyebrow, e.g. "01" */
  index: string;
  /** Small-caps label, e.g. "About" */
  eyebrow: string;
  /** Heading — pass JSX to accent a word in gold, e.g. <>Find Me <em>Online</em></> */
  title: ReactNode;
  /** Optional supporting paragraph under the heading */
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Consistent section header: numbered eyebrow + serif title + description.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-2xl md:mb-20",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p
        className={cn(
          "eyebrow flex items-center gap-3",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span aria-hidden="true" className="hairline w-10" />
        <span>
          {index} · {eyebrow}
        </span>
        <span aria-hidden="true" className="hairline w-10" />
      </p>

      <h2 className="mt-5 font-display text-4xl leading-[1.12] text-mist-100 sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mist-400 md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
