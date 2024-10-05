const whitelist = [
  "https://imaginative-puffpuff-805543.netlify.app", // Your frontend production URL
  "http://localhost:3000", // For local development
];

const credentials = (req, res, next) => {
  const origin = req.headers.origin || "undefined";
  console.log("Origin: " + origin);

  if (whitelist.includes(origin) || origin === "undefined") {
    // Allow Access-Control-Allow-Credentials for whitelisted origins or undefined origins
    res.header("Access-Control-Allow-Credentials", true);
  } else {
    console.log(`Origin ${origin} not in whitelist`);
  }

  next();
};

module.exports = credentials;
