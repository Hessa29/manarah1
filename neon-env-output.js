const crypto = require('crypto');

// Generate valid 32-char random secret
const secret = crypto.randomBytes(16).toString('hex');

// Output the values in the requested format
console.log('DATABASE_URL=postgresql://neondb_owner:PASSWORD@ep-floral-art-32210212.us-east-2.aws.neon.tech/neondb?sslmode=require');
console.log('NEON_AUTH_BASE_URL=https://auth.neon.cloud');
console.log('NEON_AUTH_COOKIE_SECRET=' + secret);
