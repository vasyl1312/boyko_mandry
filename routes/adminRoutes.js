const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const router = new Router();

router.get("/", async (req, res) => {
  if (req.session && req.session.user) {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    res.render("admin", {
      login: req.session.user,
      mainPhones: mainPhones[0].phone,
      mainEmails: mainEmails[0].email,
    });
  } else {
    res.redirect("/");
  }
});

router.post("/edit_main_phone", async (req, res) => {
  if (req.session && req.session.user) {
    const { new_phone } = req.body;

    const mainPhones = await MainPhone.find();
    mainPhones[0].phone = new_phone;
    await mainPhones[0].save();

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
});

router.post("/edit_main_email", async (req, res) => {
  if (req.session && req.session.user) {
    const { new_email } = req.body;

    const mainEmails = await MainEmail.find();
    mainEmails[0].email = new_email;
    await mainEmails[0].save();

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
});

module.exports = router;
