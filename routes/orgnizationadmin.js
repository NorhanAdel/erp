const express = require("express");
const router = express.Router();
const organizationAdminController = require("../controller/orgAdmoin");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post(
  "/upload",
  upload.single("excel"),
  organizationAdminController.uploadOrganizationAdmin
);

module.exports = router;
