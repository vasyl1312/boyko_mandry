const { Router } = require("express");
const MainPhone = require("../models/MainPhone");
const MainEmail = require("../models/MainEmail");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    res.render("index", { mainPhones: mainPhones[0].phone, mainEmails: mainEmails[0].email });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const routes = [
  { path: "/", name: "index" },
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
  {path: "/routesMaydan", template: "routesMaydan" },
];

async function getMainContactInfo() {
  try {
    const mainPhones = await MainPhone.find();
    const mainEmails = await MainEmail.find();
    return { mainPhones: mainPhones[0].phone, mainEmails: mainEmails[0].email };
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
