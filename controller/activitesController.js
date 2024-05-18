const Activity = require("../model/activitesmodel");
const xlsx = require("xlsx");

exports.uploadActivity = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No Excel file uploaded" });
    }

    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);

    for (const row of data) {
      const {
        "Activity ID": activityId,
        "Activity Name": activityName,
        "Activity Type": activityType,
        "Avail Camera": availCamera,
        "Avail Voice": availVoice,
        "Organization ID": organizationId,
        "Organization name": organizationName,
        "Contact ID": contactId,
        "Contact Name": contactName,
        "Agent ID": agentId,
        "Agent Name": agentName,
        "Activitity Planned Time": activityPlannedTime,
        "Activity status": activityStatus,
        "Activity Actual Time": activityActualTime,
        "Check-in Location": checkInLocation,
        Attachement: attachment,
      } = row;

      const activityInstance = new Activity({
        activityId,
        activityName,
        activityType,
        availCamera,
        availVoice,
        organizationId,
        organizationName,
        contactId,
        contactName,
        agentId,
        agentName,
        activityPlannedTime,
        activityStatus,
        activityActualTime,
        checkInLocation,
        attachment,
      });

      await activityInstance.save();
    }

    res.status(201).json({ message: "Activities created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getActivites = async (req, res, next) => {
  try {
    const { status, agentId } = req.params;
    const activites = await Activity.find({ activityStatus: status, agentId });
    res.json({ activites });
    console.log(status);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};
