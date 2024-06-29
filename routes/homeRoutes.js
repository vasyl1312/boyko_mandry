const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    res.render("index", {
      mainPhones: mainPhones[0].phone,
      mainEmails: mainEmails[0].email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
