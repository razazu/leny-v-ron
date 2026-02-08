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
    return NextResponse.redirect(
      new URL(`/admin?error=${encodeURIComponent(data.error_description || data.error)}`, request.url)
    );
  }

  const token = data.access_token;

  // Try popup postMessage first, fallback to redirect
  return new NextResponse(
    `<html><body>
      <p>מתחבר...</p>
      <script>
        (function() {
          var token = "${token}";
          var msg = 'authorization:github:success:{"token":"' + token + '","provider":"github"}';

          if (window.opener) {
            window.opener.postMessage(msg, window.location.origin);
            setTimeout(function() { window.close(); }, 500);
          } else {
            // No popup - store token directly and redirect to admin
            localStorage.setItem('netlify-cms-user', JSON.stringify({
              token: token,
              name: '',
              login: '',
              avatar_url: '',
              backendName: 'github'
            }));
            window.location.href = '/admin';
          }
        })();
      </script>
    </body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
