const bodyParser = require("body-parser");
const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/api/usercommands", async (req, res) => {
  const token = req.body.token;
  const uid = req.body.uid;
  const url = `https://discord.com/api/v8/applications/${uid}/commands`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bot ${token}`,
    },
  });

  console.log("API was called: userCommands");
  res.json(response.data);
});

app.listen(port, () => {
  console.log(`Server is up and ready: listening at https://localhost:${port}`);
});
