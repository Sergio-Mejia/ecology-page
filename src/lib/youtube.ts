const YOUTUBE_ID = /^[\w-]{11}$/;

/** Extrae el ID de un enlace de YouTube (watch, youtu.be, shorts, embed o live). */
export function getYouTubeId(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^(www\.|m\.)/, "");
  let id: string | null = null;

  if (host === "youtu.be") {
    id = parsed.pathname.slice(1).split("/")[0];
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    const [, kind, value] = parsed.pathname.split("/");
    id = kind === "watch" ? parsed.searchParams.get("v") : value;
  }

  return id && YOUTUBE_ID.test(id) ? id : null;
}
