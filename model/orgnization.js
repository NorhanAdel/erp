const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  businessUserId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userMobileNumber: {
    type: String,
    required: true,
  },
  userNationalId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userStatus: {
    type: String,
    required: true,
  },
  superAdmin: {
    type: Boolean,
    required: true,
  },
  organizationAdmin: {
    type: Boolean,
    required: true,
  },
  fieldAgent: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("addAgent", agentSchema);
