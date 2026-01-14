// server.js
const { configureExpress } = require("./src/config/setup/express");
const { initializeServer } = require("./src/config/setup/setup");

// Get the configured Express application
const app = configureExpress();

// Initialize and start the server (only in non-serverless environment)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  initializeServer(app);
}

// Export the Express app for Vercel serverless functions
module.exports = app;