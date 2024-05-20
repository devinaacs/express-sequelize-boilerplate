require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("api", router);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} environment.🚀`);
  console.log(`App is listening on port ${port}.`);
});
