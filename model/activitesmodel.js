const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  activityId: {
    type: String,
    required: true,
  },
  activityName: {
    type: String,
    required: true,
  },
  activityType: {
    type: String,
    required: true,
  },
  availCamera: {
    type: Boolean,
    required: true,
  },
  availVoice: {
    type: Boolean,
    required: true,
  },
  organizationId: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  contactId: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  agentId: {
    type: String,
    required: true,
  },
  agentName: {
    type: String,
    required: true,
  },
  activityPlannedTime: {
    type: Date,
    required: true,
  },
  activityStatus: {
    type: String,
    required: true,
  },
  activityActualTime: {
    type: Date,
    required: false,
  },
  checkInLocation: {
    type: String,
    required: true,
  },
  attachment: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("agent_activites", activitySchema);
