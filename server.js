const express = require("express");
const path = require("path");
const helmet = require("helmet");

const app = express();
const PORT = 3000; // * Match the Port field in seenode
const BUILD_DIR = path.join(__dirname, "dist", "MyPortfolio", "browser"); // * Angular CLI default output folder

// * Serve static assets from the build output
app.use(express.static(BUILD_DIR));
app.use(helmet());
app.disable('x-powered-by');

// * SPA fallback: always return index.html
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(BUILD_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});