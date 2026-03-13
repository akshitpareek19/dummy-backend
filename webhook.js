const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/deploy", (req, res) => {
  console.log("GitHub webhook received. Deploying...");

  exec("bash /home/akshitpareek/dummy-backend/deploy.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Deployment failed");
    }

    console.log(stdout);
    console.error(stderr);
    res.send("Deployment successful");
  });
});

app.listen(4000, () => {
  console.log("Webhook listener running on port 4000");
});
