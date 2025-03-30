fetch("https://hook.eu2.make.com/2213p9gruib76nui344yvmssgqkcdk1z", {
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
});
