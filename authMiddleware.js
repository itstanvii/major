const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "digiserver";

const mappings = {
  get: [
    "/auth/view-user",
    "auth/view-trainer",
    "auth/view-orders",
    "auth/admin",
  ],
  post: ["/user", "/trainer", "/items", "/auth/remove", "/auth/edit"],
  put: ["/user", "/trainer", "/items"],
  delete: ["/user", "/trainer", "/items"],
};

function requiresAuth(method, url) {
  const methodRoutes = mappings[method.toLowerCase()] || [];
  return methodRoutes.some((route) => url.startsWith(route));
}

module.exports = function (req, res, next) {
  console.log(`[Middleware] ${req.method} ${req.url}`);

  // Login route
  if (req.url.endsWith("/login") && req.method === "POST") {
    if (req.body?.name === USERNAME && req.body?.password === PASSWORD) {
      const token = jwt.sign({ data: USERNAME }, APP_SECRET, {
        expiresIn: "1h",
      });
      res.json({ success: true, token });
    } else {
      res.json({ success: false });
    }
    return;
  }

  // Protected routes
  if (requiresAuth(req.method, req.url)) {
    let token = req.headers["authorization"] || "";
    if (token.startsWith("Bearer ")) {
      token = token.slice(7);
      try {
        jwt.verify(token, APP_SECRET);
        return next(); // ✅ let request go through
      } catch (err) {
        console.error("JWT verification failed:", err.message);
      }
    } else {
      console.warn("No Bearer token in request.");
    }
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  next(); // Public routes
};
