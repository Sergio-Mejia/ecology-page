import { Container } from "@/components/Container";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { videoContent } from "@/data/video";

export function VideoSection() {
  const { heading, description, youtubeUrl, title } = videoContent;

  return (
    <section id="video" className="bg-olive-dark py-16 desktop:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-section-head text-center">
          <p className="mb-3.5 text-eyebrow text-ambar uppercase">
            {heading.eyebrow}
          </p>
          <h2 className="text-section-title-sm font-bold text-cream desktop:text-section-title">
            {heading.title}
          </h2>
          <p className="mt-4 text-body text-cream-200">{description}</p>
        </div>
        <YouTubeEmbed
          url={youtubeUrl}
          title={title}
          className="mx-auto max-w-5xl"
        />
      </Container>
    </section>
  );
}
