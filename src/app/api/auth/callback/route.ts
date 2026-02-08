import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code parameter" }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: "Missing GitHub OAuth credentials" }, { status: 500 });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await tokenResponse.json();

  if (data.error) {
    return new NextResponse(
      `<html><body><script>
        window.opener.postMessage(
          'authorization:github:error:${JSON.stringify(data)}',
          window.location.origin
        );
        window.close();
      </script></body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  return new NextResponse(
    `<html><body><script>
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: "github" })}',
        window.location.origin
      );
      window.close();
    </script></body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}
