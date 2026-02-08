import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code parameter" }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse(
      `<html><body><h2>Missing env vars</h2><p>CLIENT_ID: ${clientId ? "set" : "MISSING"}</p><p>CLIENT_SECRET: ${clientSecret ? "set" : "MISSING"}</p></body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
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
      `<html><body>
        <h2>OAuth Error</h2>
        <p>${data.error}: ${data.error_description || ""}</p>
        <script>
          setTimeout(function() {
            if (window.opener) {
              window.opener.postMessage(
                'authorization:github:error:${JSON.stringify(data).replace(/'/g, "\\'")}',
                window.location.origin
              );
            }
          }, 3000);
        </script>
      </body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  const token = data.access_token;

  return new NextResponse(
    `<html><body>
      <p>Authenticating...</p>
      <script>
        (function() {
          var msg = 'authorization:github:success:{"token":"${token}","provider":"github"}';
          if (window.opener) {
            window.opener.postMessage(msg, window.location.origin);
            setTimeout(function() { window.close(); }, 500);
          } else {
            document.body.innerHTML = '<h2>Success but no opener window</h2><p>Token received. Close this tab and go back to /admin</p>';
          }
        })();
      </script>
    </body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}
