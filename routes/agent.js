const express = require("express");
const router = express.Router();
const agentController = require("../controller/agentcontroll");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("excel"), agentController.uploadAgent);

module.exports = router;
