const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();

const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const adminRoutes = require("./routes/adminRoutes");
const logoutRoutes = require("./routes/logoutRoutes");
const fileMiddleware = require("./middleware/uploadFile");
// const unknownRouteRedirect = require("./middleware/unknownRouteRedirect");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));
app.use("/views/image", express.static(__dirname + "/views/image"));
app.use("/images", express.static(__dirname + "/images"));
app.use(
  "/views/css",
  (req, res, next) => {
    res.type("text/css");
    next();
  },
  express.static(__dirname + "/views/css")
);
app.use(
  "/views/js",
  (req, res, next) => {
    res.type("application/javascript");
    next();
  },
  express.static(__dirname + "/views/js")
);
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: `${process.env.USERNAME}`,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(fileMiddleware.single("avatar"));

app.use("/", homeRoutes);
app.use("/boyko_vhid", loginRoutes);
app.use("/boyko_vyhid", logoutRoutes);
app.use("/admin", adminRoutes);

const start = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`);

    app.listen(port, () => {
      console.log(`Сервер запущено на порту ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
