const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("this is middleware t b/t router and API");
  next();
});

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Cohort Backend",
  });
});

module.exports = router;
