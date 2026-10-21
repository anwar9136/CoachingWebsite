/** Indian mobile: optional +91/91/0 prefix, then 10 digits starting 6-9. */
export function isValidIndianPhone(input: string): boolean {
  const digits = input.replace(/[\s\-()]/g, "");
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(digits);
}

export function whatsappLink(number: string, message = ""): string {
  const clean = number.replace(/\D/g, "");
  return `https://wa.me/${clean}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function telLink(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

/** Google Maps search / embed query from address or a maps.google.com ?q= link. */
export function mapsPlaceQuery(address?: string, mapUrl?: string): string {
  if (address?.trim()) return address.trim();
  if (!mapUrl?.trim()) return "";
  try {
    const url = new URL(mapUrl);
    const q = url.searchParams.get("q");
    if (q?.trim()) return q.trim();
  } catch {
    /* relative or malformed URL */
  }
  return mapUrl.trim();
}

export function googleMapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=en&z=16&output=embed`;
}

export function googleMapsDirectionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function googleMapsPlaceUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
