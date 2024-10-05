const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app", // Your frontend production URL
  "http://localhost:3000", // For local development
];

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  console.log("Origin: " + origin);
  if (whitelist.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = credentials;
