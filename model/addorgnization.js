const mongoose = require('mongoose');

 
const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bankAccount: { type: String, required: true },
  agentType: { type: String, required: true },
  minimumMoney: { type: Number, required: true },
  agentStatus: { type: String, required: true },
  limitedMoney: { type: Number, required: true },
  licenseCode: { type: String, required: true },
  attachments: { type: [String], required: true },
});

  
const Agent = mongoose.model('orgnization', agentSchema);

module.exports = Agent;