const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.render("login", { error: "" });
});

router.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login === process.env.LOGIN && password === process.env.PASSWORD) {
      req.session.user = login;
      res.render("admin", { login });
    } else {
      res.render("login", { error: "Wrong login or password!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;