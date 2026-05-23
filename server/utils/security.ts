import crypto from 'crypto';

// --- Password Hashing ---
// Generates a salted hash for the password
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${derivedKey}`;
}

// Verifies a plaintext password against the stored hash
export function verifyPassword(password: string, hashStr: string): boolean {
  // Fallback support: if the stored password doesn't contain a colon, it's plaintext.
  // This allows the system to continue working if the current db has plaintext 'admin'.
  if (!hashStr.includes(':')) {
    return password === hashStr;
  }
  
  const [salt, key] = hashStr.split(':');
  const derivedKey = crypto.scryptSync(password, salt, 64).toString('hex');
  return key === derivedKey;
}

// --- Sanitization (XSS) ---
// Escapes HTML special characters to prevent Cross-Site Scripting
export function sanitizeHTML(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- Rate Limiting ---
// A simple in-memory rate limiter based on IP/identifier
const rateLimits = new Map<string, { count: number, resetTime: number }>();

export function checkRateLimit(ip: string, limit: number = 3, windowMs: number = 10 * 60 * 1000): boolean {
  // If IP is not available, bypass or use a generic fallback (not recommended for production, but ok here)
  if (!ip) return true;
  
  const now = Date.now();
  let record = rateLimits.get(ip);

  // If there's no record or the window expired, reset the counter
  if (!record || now > record.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  // Increment if below limit
  if (record.count < limit) {
    record.count++;
    return true;
  }

  // Rate limit exceeded
  return false;
}
