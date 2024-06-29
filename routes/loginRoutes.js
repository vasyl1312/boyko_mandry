const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const router = new Router();

router.get("/", (req, res) => {
  res.render("login", { error: "" });
});

router.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login === process.env.LOGIN && password === process.env.PASSWORD) {
      req.session.user = login;
      const mainPhones = await MainPhone.find();
      const mainEmails = await MainEmail.find();
      res.render("admin", {
        login,
        mainPhones: mainPhones[0].phone,
        mainEmails: mainEmails[0].email,
      });
    } else {
      res.render("login", { error: "Wrong login or password!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
