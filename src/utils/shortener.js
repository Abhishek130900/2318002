// src/utils/shortener.js
import { validateUrl, validateCode, validateValidity } from './validator';

export function generateShortcode(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export function createShortUrl(originalUrl, validity, customCode = "") {
  const existing = JSON.parse(localStorage.getItem("shortUrls") || "{}");

  // Validate URL
  if (!validateUrl(originalUrl)) {
    throw new Error("Invalid URL format.");
  }

  // Validate validity (if provided)
  if (validity !== undefined && validity !== null && !validateValidity(validity)) {
    throw new Error("Validity must be a valid integer (in minutes).");
  }

  let shortcode = customCode.trim();

  if (shortcode) {
    if (!validateCode(shortcode)) {
      throw new Error("Invalid shortcode. Must be alphanumeric and 3–20 characters long.");
    }
    if (existing[shortcode]) {
      throw new Error("Shortcode already exists.");
    }
  } else {
    do {
      shortcode = generateShortcode();
    } while (existing[shortcode]);
  }

  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + (validity || 30) * 60000);

  existing[shortcode] = {
    originalUrl,
    shortcode,
    createdAt,
    expiresAt,
    clicks: [],
  };

  localStorage.setItem("shortUrls", JSON.stringify(existing));
  return { shortcode, originalUrl, expiresAt };
}
