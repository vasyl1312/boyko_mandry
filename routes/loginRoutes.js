const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const Inst = require("../models/Inst");
const Facebook = require("../models/Facebook");
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
      const insts = await Inst.find();
      const facebooks = await Facebook.find();

      res.render("admin", {
        login,
        mainPhones: mainPhones[0].phone,
        mainEmails: mainEmails[0].email,
        insts: insts[0].instagram,
        facebooks: facebooks[0].facebook,
      });
    } else {
      res.render("login", { error: "Wrong login or password!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
