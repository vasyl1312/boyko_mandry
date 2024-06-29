const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const Inst = require("../models/Inst");
const Facebook = require("../models/Facebook");
const TransferPhone = require("../models/TransferPhone");
const Contact = require("../models/Contacts");
const router = new Router();

router.get("/", async (req, res) => {
  if (req.session && req.session.user) {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    const insts = await Inst.find();
    const facebooks = await Facebook.find();
    const transferPhones = await TransferPhone.find();
    const contacts = await Contact.find();

    res.render("admin", {
      login: req.session.user,
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

router.post("/edit_inst", async (req, res) => {
  if (req.session && req.session.user) {
    const { new_inst } = req.body;

    const insts = await Inst.find();
    insts[0].instagram = new_inst;
    await insts[0].save();

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
});

router.post("/edit_fb", async (req, res) => {
  if (req.session && req.session.user) {
    const { new_fb } = req.body;

    const facebooks = await Facebook.find();
    facebooks[0].facebook = new_fb;
    await facebooks[0].save();

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
});

router.post("/edit_transfer_phone", async (req, res) => {
  if (req.session && req.session.user) {
    const { new_transfer_phone } = req.body;

    const transferPhones = await TransferPhone.find();
    transferPhones[0].phone = new_transfer_phone;
    await transferPhones[0].save();

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
});

router.post("/edit_contacts", async (req, res) => {
  if (req.session && req.session.user) {
    const { address, postcode, email, phone } = req.body;

    const contacts = await Contact.find();
    contacts[0].address = address;
    contacts[0].postcode = postcode;
    contacts[0].email = email;
    contacts[0].phone = phone;
    await contacts[0].save();

    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
});

// router.post("/add", async (req, res) => {
//   if (req.session && req.session.user) {
//     const { address, postcode, phone, email } = req.body;

//     const newPhone = new Contact({ address, postcode, phone, email });
//     await newPhone.save();

//     return res.redirect("/admin");
//   } else {
//     return res.redirect("/");
//   }
// });

module.exports = router;
