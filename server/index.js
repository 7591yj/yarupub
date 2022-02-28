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

app.post("/commands/get", async (req, res) => {
  const token = req.body.token;
  const uid = req.body.uid;
  const url = `https://discord.com/api/v8/applications/${uid}/commands`;
  await axios
    .get(url, {
      headers: {
        Authorization: `Bot ${token}`,
      },
    })
    .then((response) => {
      console.log("API was called: get commands");
      res.json(response.data);
    })
    .catch((error) => {
      console.log("ERR: get commands, status: ", error.response.status);
      if (error.response.status === 401) res.json({ status: 401 });
    });
});

app.post("/commands/create", async (req, res) => {});

app.post("/commands/delete", async (req, res) => {
  const token = req.body.token;
  const uid = req.body.uid;
  const command = req.body.commandId;
  const url = `https://discord.com/api/v8/applications/${uid}/commands/${command}`;
  const response = await axios.delete(url, {
    headers: {
      Authorization: `Bot ${token}`,
    },
  });

  console.log("API was called: delete command");
  res.json(response.data);
});

app.post("/commands/edit", async (req, res) => {
  const token = req.body.token;
  const uid = req.body.uid;
  const command = req.body.commandId;
  const options = req.body.options;
  const url = `https://discord.com/api/v8/applications/${uid}/commands/${command}`;
  const response = await axios.patch(url, options, {
    headers: {
      Authorization: `Bot ${token}`,
    },
  });

  console.log("API was called: edit command");
  res.json(response.data);
});

app.listen(port, () => {
  console.log(`Server is up and ready: listening at http://localhost:${port}`);
});
