import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl;

  if (!nextUrl.searchParams.has("url")) {
    return new Response("Missing URL parameter", {
      status: 400,
    });
  }

  try {
    const response = await fetch(`${nextUrl.searchParams.get("url")}`);

    if (!response.ok) {
      return new Response("Failed to fetch the URL", {
        status: 500,
      });
    }

    return response;
  } catch (error) {
    return new Response("An error occurred", {
      status: 500,
    });
  }
}
