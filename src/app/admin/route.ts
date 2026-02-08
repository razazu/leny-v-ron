export async function GET() {
  const html = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Leny V Ron - ניהול תוכן</title>
  <style>
    .manual-login {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99999;
      background: #333;
      color: white;
      padding: 10px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-family: sans-serif;
      font-size: 14px;
    }
    .manual-login:hover { background: #555; }
  </style>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  <a href="/api/auth" class="manual-login">התחבר עם GitHub (ידני)</a>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
