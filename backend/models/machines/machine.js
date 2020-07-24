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
    required: true,
  },

  state: {
    type: String,
    
  },
  brand: {
    type: String,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  supplierContact: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
  dateOfPurchase: {
    type: String,
    required: true,
  },
  inventory: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  comment: {
    type: String
  }
});

// Model
const MachineList = mongoose.model("MachineList", Machine);

module.exports = MachineList;
