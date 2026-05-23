import crypto from 'crypto';

// Get JWT Secret from Nuxt runtime config
function getSecret(): string {
  const config = useRuntimeConfig();
  return config.jwtSecret || 'riftsync_default_secret_key_12345!';
}

export interface JWTPayload {
  role: string;
  [key: string]: any;
}

/**
 * Signs a JWT payload using HMAC SHA256.
 * @param payload The session payload to sign.
 * @param expiresInSeconds Duration in seconds for token validity. Default is 24 hours.
 */
export function signToken(payload: JWTPayload, expiresInSeconds: number = 24 * 3600): string {
  const secret = getSecret();
  const header = { alg: 'HS256', typ: 'JWT' };
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const fullPayload = { ...payload, exp };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Payload = Buffer.from(JSON.stringify(fullPayload)).toString('base64url');

  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${base64Header}.${base64Payload}`)
    .digest('base64url');

  return `${base64Header}.${base64Payload}.${signature}`;
}

/**
 * Verifies a JWT token signature and expiration.
 * @param token The JWT token string.
 * @returns Decoded payload if valid, otherwise null.
 */
export function verifyToken(token: string): JWTPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const header = parts[0];
    const payload = parts[1];
    const signature = parts[2];

    if (!header || !payload || !signature) return null;
    const secret = getSecret();

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${header}.${payload}`)
      .digest('base64url');

    if (signature !== expectedSignature) return null;

    const decodedPayload = JSON.parse(
      Buffer.from(payload, 'base64url').toString('utf8')
    ) as JWTPayload;

    // Check expiration
    if (decodedPayload.exp && decodedPayload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return decodedPayload;
  } catch (e) {
    return null;
  }
}
