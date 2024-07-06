const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const Inst = require("../models/Inst");
const Facebook = require("../models/Facebook");
const TransferPhone = require("../models/TransferPhone");
const Contact = require("../models/Contacts");
const Service = require("../models/Services");
const router = new Router();

const routes = [
  { path: "/", template: "index" },
  { path: "/routes", template: "routes" },
  { path: "/aboutUs", template: "aboutUs" },
  { path: "/attraction", template: "attraction" },
  { path: "/attractions", template: "attractions" },
  { path: "/services", template: "services" },
  { path: "/reach", template: "reach" },
  { path: "/contacts", template: "contacts" },
  { path: "/attractionMagura", template: "attractionMagura" },
  { path: "/attractionKhryn", template: "attractionKhryn" },
  { path: "/attractionChurchPloske", template: "attractionChurchPloske" },
  { path: "/attractionOstroverh", template: "attractionOstroverh" },
  { path: "/attractionKolubu", templates: "attractionKolubu" },
  { path: "/routesChurch", template: "routesChurch" },
  { path: "/routesHeroes", template: "routesHeroes" },
  { path: "/routesMaydan", template: "routesMaydan" },
  { path: "/events", template: "events" },
];

async function getMainContactInfo() {
  try {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    const insts = await Inst.find();
    const facebooks = await Facebook.find();
    const transferPhones = await TransferPhone.find();
    const contacts = await Contact.find();
    const services = await Service.find().sort({ _id: -1 });

    return {
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
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

routes.forEach((route) => {
  router.get(route.path, async (req, res) => {
    try {
      const contactInfo = await getMainContactInfo();
      res.render(route.template, contactInfo);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
});

module.exports = router;
