const { Router } = require("express");
var fs = require("fs");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const Inst = require("../models/Inst");
const Facebook = require("../models/Facebook");
const TransferPhone = require("../models/TransferPhone");
const Contact = require("../models/Contacts");
const Service = require("../models/Services");
const EMPTYIMG = "/images/empty.png";
const router = new Router();

router.get("/", async (req, res) => {
  if (req.session && req.session.user) {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    const insts = await Inst.find();
    const facebooks = await Facebook.find();
    const transferPhones = await TransferPhone.find();
    const contacts = await Contact.find();
    const services = await Service.find().sort({ _id: -1 });

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
      services,
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

router.post("/addServices", async (req, res) => {
  if (req.session && req.session.user) {
    try {
      const {
        title,
        show_price,
        description,
        category_1,
        price_per_hour_1,
        price_per_day_1,
        category_2,
        price_per_hour_2,
        price_per_day_2,
        category_3,
        price_per_hour_3,
        price_per_day_3,
      } = req.body;

      const img = req.file ? req.file.path : EMPTYIMG;

      const newService = new Service({
        title,
        img,
        show_price,
        description,
        category_1,
        price_per_hour_1,
        price_per_day_1,
        category_2,
        price_per_hour_2,
        price_per_day_2,
        category_3,
        price_per_hour_3,
        price_per_day_3,
      });

      await newService.save();
      return res.redirect("/admin");
    } catch (error) {
      console.error(error);
      return res.redirect("/admin");
    }
  } else {
    return res.redirect("/");
  }
});

router.post("/deleteService", async (req, res) => {
  if (req.session && req.session.user) {
    try {
      const { id } = req.body;

      await Service.findByIdAndDelete(id);

      if (req.body.img !== "/images/empty.png") {
        const filePath = `${req.body.img}`;
        fs.unlinkSync(filePath);
      }

      return res.redirect("/admin");
    } catch (error) {
      console.error(error);
      return res.redirect("/admin");
    }
  } else {
    return res.redirect("/");
  }
});

router.post("/editService", async (req, res) => {
  try {
    const { id } = req.body;
    delete req.body.id;

    if (req.file) {
      if (req.body.img !== "/images/empty.png") {
        const filePath = `${req.body.img}`;
        fs.unlinkSync(filePath);
      }
      req.body.img = req.file.path;
    }

    const service = await Service.findById(id);
    if (!service) {
      return res.redirect("/admin");
    }

    Object.assign(service, req.body);
    await service.save();

    return res.redirect("/admin");
  } catch (e) {
    console.error(e);
    return res.redirect("/admin");
  }
});

module.exports = router;
