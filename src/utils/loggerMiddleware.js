export function logEvent(eventType, details) {
  const log = {
    timestamp: new Date().toISOString(),
    eventType,
    ...details,
  };

  const logs = JSON.parse(localStorage.getItem("appLogs") || "[]");
  logs.push(log);
  localStorage.setItem("appLogs", JSON.stringify(logs));
}
