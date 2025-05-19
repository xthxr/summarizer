const express = require("express");
const router = express.Router();
const { summarizeContent } = require("../controllers/summarizeController");

router.post("/", summarizeContent);

module.exports = router;
