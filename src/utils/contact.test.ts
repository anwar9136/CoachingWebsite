import { describe, expect, it } from "vitest";
import { isValidIndianPhone, whatsappLink } from "./contact";

describe("Indian phone validation", () => {
  it("accepts 10-digit mobiles starting 6-9 with optional +91", () => {
    expect(isValidIndianPhone("9876543210")).toBe(true);
    expect(isValidIndianPhone("+91 98765 43210")).toBe(true);
  });
  it("rejects numbers starting 0-5 or wrong length", () => {
    expect(isValidIndianPhone("5876543210")).toBe(false);
    expect(isValidIndianPhone("98765")).toBe(false);
  });
});

describe("WhatsApp link", () => {
  it("uses the configured number with encoded message", () => {
    expect(whatsappLink("+91 98765-43210", "Hi there")).toBe(
      "https://wa.me/919876543210?text=Hi%20there",
    );
  });
});
