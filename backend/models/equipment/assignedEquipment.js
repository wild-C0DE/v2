const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Assigned = new Schema({
    nameOfAgent: {
    type: String,
    required: true,
  },
  referenceOfAgent: {
    type: String,
    required: true,
  },
  listOfEquipment: {
    type: String,
    required: true,
  },
  referenceOfEquipment: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    
  },
  date: {
    type: String,
    // required: true,
  },
  department: {
    type: String,
    // required: true,
  },
  comment: {
    type: String,
    // required: true,
  },
 
});

// Model
const AssignedEquipmentList = mongoose.model("AssignedEquipmentList", Assigned);

module.exports = AssignedEquipmentList;
