import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? "images";
const EXPIRES_IN_SECONDS = Number(
  process.env.SUPABASE_SIGNED_URL_TTL_SECONDS ?? 3600
);
const ALLOWED_PREFIXES = ["backgrounds/", "presentation night pictures/"];

function toAbsoluteUrl(signedUrl: string) {
  if (signedUrl.startsWith("http://") || signedUrl.startsWith("https://")) {
    return signedUrl;
  }

  if (!SUPABASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }

  const normalizedPath = signedUrl.startsWith("/storage/v1/")
    ? signedUrl
    : signedUrl.startsWith("/object/")
      ? `/storage/v1${signedUrl}`
      : signedUrl;

  return `${SUPABASE_URL}${normalizedPath}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { paths?: unknown };
    const paths = Array.isArray(body.paths)
      ? body.paths.filter((path): path is string => typeof path === "string")
      : [];

    if (paths.length === 0 || paths.length > 300) {
      return NextResponse.json({ error: "Invalid image path list" }, { status: 400 });
    }

    const normalizedPaths = paths.map((path) => path.replace(/^\/+/, ""));

    const hasDisallowedPath = normalizedPaths.some(
      (path) => !ALLOWED_PREFIXES.some((prefix) => path.startsWith(prefix))
    );

    if (hasDisallowedPath) {
      return NextResponse.json({ error: "Path is not allowed" }, { status: 403 });
    }

    const { data, error } = await supabaseAdmin.storage
      .from(SUPABASE_BUCKET)
      .createSignedUrls(normalizedPaths, EXPIRES_IN_SECONDS);

    if (error) {
      return NextResponse.json({ error: "Failed to sign image URLs" }, { status: 500 });
    }

    const urls = data.map((item) => (item.signedUrl ? toAbsoluteUrl(item.signedUrl) : ""));
    return NextResponse.json({ urls });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
