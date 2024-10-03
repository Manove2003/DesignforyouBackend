const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app/", // Your frontend production URL
  "http://localhost:3000", // For local development
  `http://localhost:3000/welcome?token=${token}&role=${user.role}`,
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
