const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOption = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BezKoder Application" });
});

const PORT = process.env.PORT || 8080;
const routes = require("./app/route/tutorial.route")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

const db = require("./app/models");
db.mongoose
  .connect(db, url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the databse!", err);
    process.exit();
  });
