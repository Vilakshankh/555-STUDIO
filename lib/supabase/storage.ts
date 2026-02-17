const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? "images";

const PUBLIC_BASE = SUPABASE_URL
  ? `${SUPABASE_URL.replace(/\/+$/, "")}/storage/v1/object/public/${SUPABASE_BUCKET}`
  : "";

export function publicImageUrl(path: string) {
  if (!PUBLIC_BASE) return path;
  const cleaned = path.replace(/^\/+/, "");
  return `${PUBLIC_BASE}/${encodeURI(cleaned)}`;
}
