import jwt from 'jsonwebtoken';

// Signing key for access tokens
const JWT_SECRET = 'bYfVokB7Ptv9JsjI0J9QBDeJYowIaCsILKZ1QD26BZjhyuI8';
const JWT_EXPIRES_IN = '24h';

export function signToken(userId: string): string {
  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
