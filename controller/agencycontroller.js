const xlsx = require("xlsx");
const agencymodel = require("../model/agencymodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Agent = require("../model/addorgnization");

// Controller to create an agent
const createAgent = (req, res) => {
  const {
    name,
    bankAccount,
    agentType,
    minimumMoney,
    agentStatus,
    limitedMoney,
    licenseCode,
  } = req.body;

  // Handle file uploads using multer
  // Make sure you have the 'uploads' directory created
  // Multer will store the uploaded files in the 'uploads' directory
  const upload = multer({ dest: "uploads/" }).any();
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to upload files" });
    }

    // Create a new agent object
    const newAgent = new Agent({
      name,
      bankAccount,
      agentType,
      minimumMoney,
      agentStatus,
      limitedMoney,
      licenseCode,
      attachments: req.files.map((file) => file.filename),
    });

    // Save the agent in the database
    newAgent.save((err, agent) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create agent" });
      }

      res.status(201).json(agent);
    });
  });
};

const validator = require("email-validator");
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      accessToken: token,
      user: {
        email: user.email,
        name: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const uploadExcel = (req, res) => {
  const file = req.file;
  const workbook = xlsx.readFile(file.path);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

  agencymodel
    .create(data)
    .then(() => {
      res.send("Excel sheet uploaded and saved to the database");
    })
    .catch((error) => {
      res.status(500).send("Error saving data to the database");
    });
};
const addAgent = () => {};

module.exports = {
  uploadExcel,
  loginUser,
  createAgent,
};
