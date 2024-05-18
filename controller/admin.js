const Agent = require("../model/addorgnization")

const createAgent = async (req, res) => {
  try {
    const {
      userName,
      bankAccount,
      agentType,
      minMoneyToAccept,
      limitedMoney,
      licenceCode,
      attachments,
    } = req.body;

    const agent = new Agent({
      userName,
      bankAccount,
      agentType,
      minMoneyToAccept,
      limitedMoney,
      licenceCode,
      attachments,
    });

    await agent.save();

    res.status(201).json({ message: "Agent created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createAgent,
};

