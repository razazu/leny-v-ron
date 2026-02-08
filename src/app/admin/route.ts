export async function GET() {
  const html = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Leny V Ron - ניהול תוכן</title>
</head>
<body>
  <script>
    // Check if user is already authenticated
    var stored = localStorage.getItem('netlify-cms-user');
    if (!stored) {
      // No token - redirect to GitHub OAuth
      window.location.href = '/api/auth';
    } else {
      // Token exists - load CMS
      var script = document.createElement('script');
      script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
      document.body.appendChild(script);
    }
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
