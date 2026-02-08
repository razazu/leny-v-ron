import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const siteId = request.nextUrl.searchParams.get("site_id") || "";
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json({ error: "Missing GITHUB_CLIENT_ID" }, { status: 500 });
  }

  const scope = "repo,user";
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&site_id=${siteId}`;

  return NextResponse.redirect(authUrl);
}
