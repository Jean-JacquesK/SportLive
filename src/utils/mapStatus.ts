const STATUS_MAP: Record<string, "LIVE" | "FINAL" | "UPCOMING"> = {
  "pre": "UPCOMING",
  "in": "LIVE",
  "post": "FINAL",
  // Ajoutez d'autres mappings si nécessaire
}

export function mapStatus(state: string): "LIVE" | "FINAL" | "UPCOMING" {
    return STATUS_MAP[state] ?? "UPCOMING"
}