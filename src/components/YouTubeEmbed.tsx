import { useState } from "react";
import { MonitorPlay, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getYouTubeId } from "@/lib/youtube";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  url: string;
  title: string;
  className?: string;
}

/**
 * Muestra la miniatura del video y solo carga el reproductor de YouTube al
 * hacer clic: la página no descarga el iframe ni sus scripts hasta entonces.
 */
export function YouTubeEmbed({ url, title, className }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const videoId = getYouTubeId(url);

  const frameClasses = cn(
    "group relative aspect-video w-full overflow-hidden rounded-2xl bg-scrim shadow-card-hover",
    className,
  );

  if (!videoId) {
    return (
      <div
        className={cn(
          frameClasses,
          "flex flex-col items-center justify-center gap-3 border-[1.5px] border-dashed border-cream/25 bg-scrim-soft px-6 text-center",
        )}
      >
        <MonitorPlay className="size-12 text-ambar" aria-hidden="true" />
        <p className="text-body-sm text-cream-200">
          Agrega el enlace de YouTube en <code>src/data/video.ts</code>
        </p>
      </div>
    );
  }

  if (active) {
    return (
      <div className={frameClasses}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="size-full border-0"
        />
      </div>
    );
  }

  return (
    <div className={frameClasses}>
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="size-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-scrim/85 via-scrim/35 to-scrim/10">
        <Button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Reproducir video: ${title}`}
          className="size-20 rounded-full bg-cream text-olive-dark shadow-card-hover transition duration-300 group-hover:scale-110 hover:bg-cream desktop:size-24"
        >
          <Play className="ml-1 size-8 fill-current desktop:size-10" />
        </Button>
        <p className="absolute inset-x-0 bottom-0 px-6 pb-5 font-serif text-card-title font-semibold text-cream desktop:px-8 desktop:pb-7">
          {title}
        </p>
      </div>
    </div>
  );
}
