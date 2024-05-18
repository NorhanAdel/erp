const express = require("express");
const multer = require("multer");
const controller = require("../controller/admin");

const upload = multer({ dest: "uploads/" });

const router = express.Router();
// router.post("/login", controller.loginUser);
router.post("/addagent", controller.createAgent);
// router.post("/upload", upload.single("file"), controller.uploadExcel);

module.exports = router;
