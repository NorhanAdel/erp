const express = require("express");
const router = express.Router();
const activityController = require("../controller/activitesController.js");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post(
  "/uploadactivites",
  upload.single("excel"),
  activityController.uploadActivity
);

router.get("/:status/:agentId", activityController.getActivites);
module.exports = router;
