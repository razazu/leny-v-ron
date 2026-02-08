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
    const errorMsg = JSON.stringify(data).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    return new NextResponse(
      `<html><body><script>
        (function() {
          if (window.opener) {
            window.opener.postMessage(
              'authorization:github:error:${errorMsg}',
              document.location.origin
            );
          }
        })();
      </script></body></html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const token = data.access_token;
  const provider = "github";

  return new NextResponse(
    `<html><body><script>
      (function() {
        var data = JSON.stringify({ token: "${token}", provider: "${provider}" });
        var msg = "authorization:${provider}:success:" + data;

        if (window.opener) {
          window.opener.postMessage(msg, document.location.origin);
        }
      })();
    </script></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
