export async function fetchSignedImageUrls(paths: string[]) {
  const response = await fetch("/api/storage/sign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ paths }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch signed image URLs");
  }

  const data = (await response.json()) as { urls: string[] };
  return data.urls;
}
