import { NextResponse } from "next/server";

const UMAMI_API_BASE = "https://api.umami.is/v1";
const UMAMI_WEBSITE_ID = "a6b39597-5839-462f-9474-2449c030889f";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const apiKey = process.env.UMAMI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing UMAMI_API_KEY" },
      { status: 500 }
    );
  }

  const { slug } = await params;
  const path = `/blog/${slug}`;
  const searchParams = new URLSearchParams({
    startAt: "0",
    endAt: String(Date.now()),
  });
  searchParams.set("filters[path]", path);

  const response = await fetch(
    `${UMAMI_API_BASE}/websites/${UMAMI_WEBSITE_ID}/stats?${searchParams.toString()}`,
    {
      headers: {
        Accept: "application/json",
        "x-umami-api-key": apiKey,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to load blog view count" },
      { status: response.status }
    );
  }

  const data = (await response.json()) as { pageviews?: number };

  return NextResponse.json({ views: data.pageviews ?? 0 });
}
