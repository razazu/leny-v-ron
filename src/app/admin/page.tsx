"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px", direction: "rtl" }}>
      <h2>טוען ממשק ניהול...</h2>
    </div>
  );
}
