// index.js
import app from './src/app.js';

// Vercel invokes this handler function for every request
export default async function handler(request) {
  // Pass the request to your application's logic
  return app.fetch(request);
}

// Remove all Bun.serve() related code.
