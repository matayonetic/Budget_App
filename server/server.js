const express = require("express");
const path = require("path");

// App
const app = express();

// Use Static Dir
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

// 404s 
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start Servers
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
