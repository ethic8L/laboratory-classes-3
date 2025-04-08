const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("logout", {
    headTitle: "Logout",
    path: "/logout",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/logout",
  });
});

module.exports = router;
