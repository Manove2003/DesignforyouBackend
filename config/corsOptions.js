const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app", // Your frontend production URL
  "http://localhost:3000", // For local development
];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: Origin ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Make sure credentials are passed in CORS requests
};

module.exports = corsOptions;
