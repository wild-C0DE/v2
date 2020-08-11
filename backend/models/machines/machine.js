const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Machine = new Schema({
  name: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  family: {
    type: String,
  },

  state: {
    type: String,
  },
  brand: {
    type: String,
  },
  supplierName: {
    type: String,
  },
  supplierContact: {
    type: String,
  },
  serialNumber: {
    type: String,
  },
  dateOfPurchase: {
    type: String,
  },
  inventory: {
    type: String,
  },
  isbn: {
    type: String,
  },
  oprationalTimePerDay: {
    type: Number,
  },
  operationalDays: {
    type: Number,
  },
  department: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },

  // image: {
  //   type: String,
  // },
  comment: {
    type: String,
    default: "no comment",
  },
});

// Model
const MachineList = mongoose.model("MachineList", Machine);

module.exports = MachineList;
