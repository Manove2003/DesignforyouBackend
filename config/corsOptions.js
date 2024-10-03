const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app/", // Your frontend production URL
  "https://imaginative-puffpuff-805543.netlify.app/",
  "http://localhost:3000", // For local development
];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
