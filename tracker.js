console.log("📡 Tracking läuft über Cloudflare Proxy");

fetch("https://lively-unit-3dfa.lk-6e4.workers.dev/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    type: "auto-track",
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString()
  })
})
.then(res => console.log("✅ Tracking erfolgreich:", res.status))
.catch(err => console.error("❌ Fehler beim Tracking:", err));
