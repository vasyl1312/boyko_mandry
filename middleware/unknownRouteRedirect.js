function unknownRouteRedirect(req, res, next) {
  res.redirect("/");
}

module.exports = unknownRouteRedirect;
