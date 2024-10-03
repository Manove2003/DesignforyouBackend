const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app/", // Your frontend production URL
  "http://localhost:3000", // For local development
  `http://localhost:3000/welcome?token=${token}&role=${user.role}`,
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
