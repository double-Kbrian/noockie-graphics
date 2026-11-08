export async function pingIndexNow(urls: string[]) {
  const apiKey = process.env.INDEXNOW_KEY;
  const host = "kraftkilnstudio.co.ke";

  if (!apiKey) return;

  await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host,
      key: apiKey,
      keyLocation: `https://${host}/${apiKey}.txt`,
      urlList: urls,
    }),
  });
}