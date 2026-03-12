const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("working backend on gcp!!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port 3000`);
});
