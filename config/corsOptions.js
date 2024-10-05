const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app", // Your frontend production URL
  "http://localhost:3000", // For local development
];

var corsOptions = {
  origin: function (origin, callback) {
    // Allow if origin is in whitelist or if origin is undefined (e.g., Postman or non-browser requests)
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: Origin ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Ensure credentials are passed in CORS requests
};

module.exports = corsOptions;
