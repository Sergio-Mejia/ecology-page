import { Container } from "@/components/Container";
import {
  references,
  referencesNote,
  referencesTitle,
} from "@/data/references";
import type { ReferenceSegment } from "@/data/types";
import { cn } from "@/lib/utils";

function Segment({ segment, id }: { segment: ReferenceSegment; id: string }) {
  if (segment.href) {
    return (
      <a href={segment.href} className="text-ambar hover:underline">
        {segment.text}
      </a>
    );
  }

  if (segment.italic) {
    return <em key={id}>{segment.text}</em>;
  }

  return <>{segment.text}</>;
}

export function Footer() {
  return (
    <footer id="referencias" className="bg-olive-dark text-cream-200">
      <Container className="pt-16 pb-12">
        <h2 className="mb-5.5 text-footer-title font-semibold text-cream">
          {referencesTitle}
        </h2>
        <ul>
          {references.map((reference, index) => (
            <li
              key={reference.id}
              className={cn(
                "border-b border-cream/8 py-2.5 text-ref text-footer-fg",
                index === references.length - 1 && "border-b-0",
              )}
            >
              {reference.segments.map((segment, segmentIndex) => (
                <Segment
                  key={`${reference.id}-${segmentIndex}`}
                  id={`${reference.id}-${segmentIndex}`}
                  segment={segment}
                />
              ))}
            </li>
          ))}
        </ul>
        <p className="mt-7 text-note text-subtle">{referencesNote}</p>
      </Container>
    </footer>
  );
}
