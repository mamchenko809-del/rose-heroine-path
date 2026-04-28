import { useState } from "react";

interface ParagraphBlockProps {
  text: string;
  image?: string;
  index: number;
  isFirst?: boolean;
}

/**
 * Renders a paragraph with an optional illustration.
 * Layout:
 *  - On desktop: image floats to the right (even index) or left (odd index),
 *    text wraps around it harmoniously.
 *  - On mobile: image appears above the paragraph, full width.
 *  - If image is missing or fails to load, only text is shown.
 */
export const ParagraphBlock = ({ text, image, index, isFirst }: ParagraphBlockProps) => {
  const [failed, setFailed] = useState(false);
  const hasImage = image && image.trim().length > 0 && !failed;
  const floatRight = index % 2 === 0;

  const dropCapClass = isFirst
    ? "first-letter:font-serif-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-gold"
    : "";

  return (
    <div className="paragraph-block">
      {hasImage && (
        <figure
          className={[
            "my-6 md:my-2 overflow-hidden rounded-sm",
            "shadow-elegant border border-border/40",
            "md:w-[42%] md:max-w-sm",
            floatRight ? "md:float-right md:ml-8 md:mb-4" : "md:float-left md:mr-8 md:mb-4",
            "animate-[fadeInUp_0.9s_ease-out]",
          ].join(" ")}
        >
          <div className="relative bg-muted/40">
            <img
              src={image}
              alt=""
              loading="lazy"
              onError={() => setFailed(true)}
              className="w-full h-auto block transition-elegant hover:scale-[1.02]"
              style={{ filter: "saturate(0.85) contrast(1.02)" }}
            />
            {/* subtle gold-tinted overlay to harmonize with palette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>
        </figure>
      )}
      <p className={dropCapClass}>{text}</p>
      <div className="clear-both" />
    </div>
  );
};
