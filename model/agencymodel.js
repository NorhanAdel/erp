const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  Org_Admin_ID: {
    type: Number,
    required: true,
  },
  Permission_ID: {
    type: Number,
    required: true,
  },
  // User_Status: {
  //   type: Boolen,
  //   required: true,
  // },
  Username: {
    type: String,
    required: true,
  },
  User_Password: {
    type: String,
    required: true,
  },
  User_Mobile_Number: {
    type: Number,
    required: true,
  },
  Organization_Name: {
    type: String,
    required: true,
  },
  Business_User_ID: {
    type: Number,
    required: true,
  },
  User_attachement: {
    type: String,
    required: true,
  },
});

const agencymodel = mongoose.model("YourModel", agentSchema);

module.exports = agencymodel;
