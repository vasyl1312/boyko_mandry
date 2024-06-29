const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const Inst = require("../models/Inst");
const Facebook = require("../models/Facebook");
const TransferPhone = require("../models/TransferPhone");
const Contact = require("../models/Contacts");
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
      const transferPhones = await TransferPhone.find();
      const contacts = await Contact.find();

      res.render("admin", {
        login,
        mainPhones: mainPhones[0].phone,
        mainEmails: mainEmails[0].email,
        insts: insts[0].instagram,
        facebooks: facebooks[0].facebook,
        transferPhones: transferPhones[0].phone,
        address: contacts[0].address,
        postcode: contacts[0].postcode,
        email: contacts[0].email,
        phone: contacts[0].phone,
      });
    } else {
      res.render("login", { error: "Wrong login or password!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
