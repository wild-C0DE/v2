const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Workers = new Schema({
  registrationNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  socialSecurity: {
    type: String,
  },
  adress: {
    type: String,
  },

  occupation: {
    type: String,
  },
  dateOfEmployment: {
    type: String,
  },
  annuelSalary: {
    type: String,
  },
  regularHourlyRate: {
    type: Number,
  },
  hourlyOvertimeRate: {
    type: Number,
  },
});

// Model
const WorkersList = mongoose.model("WorkerList", Workers);

module.exports = WorkersList;
