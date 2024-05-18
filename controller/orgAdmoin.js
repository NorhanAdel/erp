const OrganizationAdmin = require("../model/orgAdmin");
const xlsx = require("xlsx");

exports.uploadOrganizationAdmin = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No Excel file uploaded" });
    }

    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);

    for (const row of data) {
      const {
        "Business User ID": businessUserId,
        Username: username,
        "User Password": userPassword,
        "User Mobile Number": userMobileNumber,
        "User National ID": userNationalId,
        "User Email": userEmail,
        "User Status": userStatus,
        "Super Admin": superAdmin,
        "Orgnaization Admin": organizationAdmin,
        "Field Agent": fieldAgent,
      } = row;

      const organizationAdminInstance = new OrganizationAdmin({
        businessUserId,
        username,
        userPassword,
        userMobileNumber,
        userNationalId,
        userEmail,
        userStatus,
        superAdmin,
        organizationAdmin,
        fieldAgent,
      });

      await organizationAdminInstance.save();
    }

    res
      .status(201)
      .json({ message: "Organization Admins created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
